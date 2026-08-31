Yes. This is the architecture I would use for your Next.js job application system:

![Image](https://images.openai.com/static-rsc-4/nwtzZi6w7MfqnJfiVgNxwrvVg9y3PdpSVkNDc_jZug4Nk218Iu8yTvPgaT0RV8GzHTxnNlLWVkD0_Nj_G5MP_gSH8S9NxFwHRYDgftom8kbQiZ9Bv-5ndT9AeMhbS8azD146QEgjYRxsmZFGS3T9d1Qn316fTVoXx-hn41JKaufNvEvmvFtzcYIPgvVsQk3y?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/dVqcF-vsQWobHBDxZlgRqIhYiLvL4QG5x963FtiO-o9h87Bf41puzPPaExjkTURQ0JvQlZ7syDssce821YkvaLgMW_Wh_oLCQFGgqTKhdGpuruPUoyFmeTkSReJmXslUE2r8s58zPfhOSbXqgbx54l1Vjo-pV2TdaSBQJXLHT6Myv6_MhY0rh0iPEPr4RRUj?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/MUYwhfVyADdemh1aujADwgv6wDsdQBuVnR7jvjrl_JgdwtConP0ltcSdrzp_mguwbWBihuL6w1q3nJilSfx4UzyYgz6dcb5s8zBEYxpSt3pcW2A0DgeIOYv_6ai7hfarS4CS7IWCLMn0fqKTgCH7Qr6M27T1E28245YZm9HAKI7FirGGRfM99mS-zLefaOjY?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/sD81zUx5t_7XDrvWNYz-EG-KcL_iNMXARwXtjB4WxGCRziaQt8xG-nCQLrfKElnPrLi0HeOAhLRhOkm-XE5ZEOZ3sEQ7DUaTk6KNKHM1_I1CFx37TnsmWt0YuryMPlAeuI4FmQ7qqSwuYdtWaLIdp0nmJI_fqfcL9GeP_odQgnbBi1KoC4Z_OCSmm4oi_hnB?purpose=fullsize)

```text
                         ┌─────────────────────┐
                         │      Next.js        │
                         │                     │
                         │  Job Application UI │
                         └──────────┬──────────┘
                                    │
                          1. Request upload URL
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ Next.js Route       │
                         │ Handler             │
                         └──────────┬──────────┘
                                    │
                             Presigned URL
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │       Amazon S3     │
                         │                     │
                         │   Resume PDF/DOCX   │
                         └─────────────────────┘

                                    │
                          2. Submit application
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │ Next.js Route       │
                         │ Handler             │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │    Amazon RDS       │
                         │   PostgreSQL        │
                         │                     │
                         │ Candidate data      │
                         │ Application data    │
                         │ S3 resume key       │
                         └─────────────────────┘
```

This keeps your **Next.js application as the only application/backend layer**. The browser uploads the resume directly to S3 using a short-lived presigned URL; AWS SDK v3 supports presigned `PutObject` URLs for exactly this pattern. ([AWS Documentation][1])

## 1. AWS resources

Create:

```text
AWS
├── RDS PostgreSQL
│   └── job_portal
│
└── S3
    └── your-job-resumes
```

I recommend PostgreSQL + Prisma for the RDS side. Prisma supports PostgreSQL directly. ([Prisma][2])

Your final database relationship can be:

```text
applications
│
├── id
├── job_id
├── first_name
├── last_name
├── email
├── phone
├── location
├── experience
├── cover_letter
├── resume_key
├── resume_name
├── resume_size
├── resume_type
├── status
├── created_at
└── updated_at
```

S3:

```text
job-resumes/
└── applications/
    └── 2026/
        └── 08/
            ├── <uuid>.pdf
            ├── <uuid>.pdf
            └── <uuid>.docx
```

Don't make the S3 bucket public.

---

# 2. Install packages

In your Next.js project:

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner @prisma/client
npm install -D prisma
```

AWS's current JavaScript SDK uses `@aws-sdk/s3-request-presigner` for presigned URLs. ([AWS Documentation][1])

---

# 3. Initialize Prisma

```bash
npx prisma init
```

You'll get:

```text
prisma/
└── schema.prisma

.env
```

---

# 4. Environment variables

Your `.env`:

```env
DATABASE_URL="postgresql://USERNAME:PASSWORD@RDS_ENDPOINT:5432/job_portal?sslmode=require"

AWS_REGION="ap-south-1"
AWS_ACCESS_KEY_ID="YOUR_ACCESS_KEY"
AWS_SECRET_ACCESS_KEY="YOUR_SECRET_KEY"
AWS_S3_BUCKET="your-job-resumes"
```

Do **not** prefix AWS credentials with `NEXT_PUBLIC_`.

They must remain server-side.

For production on AWS, I'd eventually replace long-lived IAM keys with an IAM role rather than keeping static credentials.

---

# 5. Prisma schema

`prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Application {
  id            String   @id @default(uuid())
  jobId         String?
  firstName     String
  lastName      String?
  email         String
  phone         String?
  location      String?
  experience    Float?
  coverLetter   String?
  resumeKey     String
  resumeName    String
  resumeSize    Int
  resumeType    String
  status        String   @default("submitted")
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@index([email])
  @@index([jobId])
  @@index([createdAt])
}
```

Then:

```bash
npx prisma migrate dev --name create_applications
```

For production:

```bash
npx prisma migrate deploy
```

---

# 6. Prisma client

Create:

```text
src/lib/prisma.ts
```

```ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

---

# 7. S3 client

Create:

```text
src/lib/s3.ts
```

```ts
import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  region: process.env.AWS_REGION,
});
```

The AWS SDK can obtain credentials from the server environment, so you don't need to manually pass credentials into every S3 operation. ([AWS Documentation][3])

---

# 8. Generate the upload URL

Create:

```text
app/api/applications/upload/route.ts
```

```ts
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { s3 } from "@/lib/s3";

const MAX_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(req: Request) {
  const { name, type, size } = await req.json();

  if (!name || !type || !size)
    return NextResponse.json({ error: "Invalid file" }, { status: 400 });

  if (!ALLOWED_TYPES.has(type))
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });

  if (size > MAX_SIZE)
    return NextResponse.json({ error: "File too large" }, { status: 400 });

  const extension = name.split(".").pop()?.toLowerCase() || "pdf";
  const key = `applications/${new Date().getFullYear()}/${String(
    new Date().getMonth() + 1
  ).padStart(2, "0")}/${randomUUID()}.${extension}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: key,
    ContentType: type,
  });

  const url = await getSignedUrl(s3, command, {
    expiresIn: 300,
  });

  return NextResponse.json({
    url,
    key,
  });
}
```

Now your browser can request:

```text
POST /api/applications/upload
```

and receive:

```json
{
  "url": "https://...",
  "key": "applications/2026/08/abc.pdf"
}
```

The URL is temporary and only allows the intended S3 operation. AWS documents this presigned-upload mechanism. ([AWS Documentation][4])

---

# 9. Submit candidate data

Create:

```text
app/api/applications/route.ts
```

```ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      jobId,
      firstName,
      lastName,
      email,
      phone,
      location,
      experience,
      coverLetter,
      resumeKey,
      resumeName,
      resumeSize,
      resumeType,
    } = body;

    if (!firstName || !email || !resumeKey || !resumeName)
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );

    const application = await prisma.application.create({
      data: {
        jobId,
        firstName,
        lastName,
        email,
        phone,
        location,
        experience: experience ? Number(experience) : null,
        coverLetter,
        resumeKey,
        resumeName,
        resumeSize: Number(resumeSize),
        resumeType,
      },
    });

    return NextResponse.json(
      {
        id: application.id,
        status: application.status,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to submit application" },
      { status: 500 }
    );
  }
}
```

---

# 10. Frontend submission

Your form can do:

```ts
const uploadResume = async (file: File) => {
  const response = await fetch("/api/applications/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: file.name,
      type: file.type,
      size: file.size,
    }),
  });

  if (!response.ok) throw new Error("Unable to prepare upload");

  const { url, key } = await response.json();

  const upload = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (!upload.ok) throw new Error("Resume upload failed");

  return key;
};
```

Then:

```ts
const submitApplication = async (data: {
  jobId?: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  location?: string;
  experience?: number;
  coverLetter?: string;
  resume: File;
}) => {
  const resumeKey = await uploadResume(data.resume);

  const response = await fetch("/api/applications", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jobId: data.jobId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      location: data.location,
      experience: data.experience,
      coverLetter: data.coverLetter,
      resumeKey,
      resumeName: data.resume.name,
      resumeSize: data.resume.size,
      resumeType: data.resume.type,
    }),
  });

  if (!response.ok) throw new Error("Application submission failed");

  return response.json();
};
```

The complete request flow becomes:

```text
Candidate
   │
   │ Fill form
   │
   ▼
Next.js
   │
   │ POST /api/applications/upload
   ▼
Next.js
   │
   │ Generate presigned URL
   ▼
Browser
   │
   │ PUT resume
   ▼
S3
   │
   │
   │ return S3 key
   ▼
Browser
   │
   │ POST /api/applications
   ▼
Next.js
   │
   │ INSERT
   ▼
RDS
```

---

# 11. Retrieving a resume

Keep S3 private.

When an admin wants to download a resume, your Next.js server can generate a temporary GET URL.

Create:

```text
app/api/applications/[id]/resume/route.ts
```

```ts
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { s3 } from "@/lib/s3";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const application = await prisma.application.findUnique({
    where: { id },
    select: {
      resumeKey: true,
      resumeName: true,
    },
  });

  if (!application)
    return NextResponse.json({ error: "Application not found" }, { status: 404 });

  const url = await getSignedUrl(
    s3,
    new GetObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: application.resumeKey,
      ResponseContentDisposition: `attachment; filename="${application.resumeName}"`,
    }),
    { expiresIn: 300 }
  );

  return NextResponse.json({ url });
}
```

AWS's SDK supports presigned `GetObject` URLs for downloads as well. ([AWS Documentation][4])

---

# 12. AWS IAM

Create an IAM user/role with only the permissions your application needs.

For the S3 bucket:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::YOUR_BUCKET/applications/*"
    }
  ]
}
```

Do **not** give your application:

```text
s3:*
```

And don't make the bucket public.

---

# 13. RDS networking is the important part

This is where your deployment architecture matters.

If your Next.js application is deployed on **Vercel**, don't simply put RDS in a private subnet and expect Vercel to connect to it directly.

You need to plan:

```text
Internet
   │
   ▼
Vercel
   │
   │ encrypted DB connection
   ▼
RDS
```

with appropriate networking/security.

If your Next.js application is deployed on AWS, you can instead have:

```text
                         AWS
┌─────────────────────────────────────────────┐
│                                             │
│  Next.js                                    │
│     │                                       │
│     │                                       │
│     ▼                                       │
│  VPC                                        │
│     │                                       │
│     ▼                                       │
│  RDS PostgreSQL                             │
│                                             │
│  S3                                         │
│                                             │
└─────────────────────────────────────────────┘
```

For a production application, I'd keep RDS **private** and only allow database traffic from the application layer.

---

# 14. Your final project structure

```text
your-next-app/
├── app/
│   ├── api/
│   │   └── applications/
│   │       ├── route.ts
│   │       ├── upload/
│   │       │   └── route.ts
│   │       └── [id]/
│   │           └── resume/
│   │               └── route.ts
│   │
│   ├── careers/
│   │   └── page.tsx
│   │
│   └── ...
│
├── src/
│   └── lib/
│       ├── prisma.ts
│       └── s3.ts
│
├── prisma/
│   └── schema.prisma
│
├── .env
├── .env.example
├── package.json
└── next.config.ts
```

### One improvement I'd make

For your particular use case, I would actually make the database slightly more normalized:

```text
jobs
│
├── id
├── title
├── slug
├── department
├── location
├── employment_type
└── active

applications
│
├── id
├── job_id ───────────────→ jobs.id
├── candidate information
├── resume_key ───────────→ S3
├── resume metadata
├── status
└── timestamps
```

That gives you a proper recruitment system instead of simply a form-storage system.

For example:

```text
/jobs/frontend-developer
/jobs/backend-developer
/jobs/ui-ux-designer
```

and every application points to the corresponding job.

**The architecture above is the one I'd use:** RDS for structured candidate/application data, S3 for private resumes, Next.js Route Handlers as the server layer, and presigned S3 URLs so the resume never has to pass through your Next.js server. This also avoids unnecessarily consuming your Next.js server's memory/bandwidth for PDF uploads. ([AWS Documentation][1])

[1]: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-s3-request-presigner/?utm_source=chatgpt.com "@aws-sdk/s3-request-presigner - AWS SDK for JavaScript v3"
[2]: https://www.prisma.io/docs/orm/v6/overview/databases/postgresql?utm_source=chatgpt.com "PostgreSQL database connector | Prisma Documentation"
[3]: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/?utm_source=chatgpt.com "What's the AWS SDK for JavaScript? - AWS SDK for JavaScript"
[4]: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/javascript_s3_code_examples.html?utm_source=chatgpt.com "Amazon S3 examples using SDK for JavaScript (v3) - AWS SDK for JavaScript"
