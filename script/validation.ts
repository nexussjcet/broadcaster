import { sjcetMailSchema } from "@/lib/email";
import { z } from "zod";

export const dataZod = z.array(z.object({
    email: z.string().email().or(sjcetMailSchema),
    name: z.string(),
    // number: z.number().or(z.string()),
    type: z.string(),
    // cheif: z.array(z.enum(
    //     [
    //         "COO",
    //         "CFO",
    //         "CTO",
    //         "CCO",
    //         "CSO",
    //         "CMO",
    //         "CVO"
    //     ]
    // )).min(1),
}))

export type CertificateZod = z.infer<typeof dataZod>

export const csvToJsonZod = z.array(z.object({
    // number: z.number().min(999_999_999).transform(e => `${e}`),
    event_register_id: z.string(),
    // info: z.string(),
    // positions: z.string(),
    name: z.string(),
    // email: z.string().email(),//sjcetMailSchema,
    // category: z.enum(["cicd", "docker", "git", "threejs", "none"]),
    // event_register_id: z.string()
    // team: z.string().optional(),
    // id: z.string().optional(),
}))