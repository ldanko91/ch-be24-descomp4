import { config } from "dotenv";
config();

export const RecoveryNodemailerConfig = {
    recoveryNodemailerService: process.env.RECOVERY_NODEMAILER_SERVICE,
    recoveryNodemailerPort: process.env.RECOVERY_NODEMAILER_PORT,
    recoveryNodemailerUserEmail: process.env.RECOVERY_NODEMAILER_USER_EMAIL,
    recoveryNodemailerPass: process.env.RECOVERY_NODEMAILER_PASS
}

