import nodemailer from 'nodemailer';
import { RecoveryNodemailerConfig } from '../../config/recoveryNodemailer.config.js';

const recoveryNodemailerTransport = nodemailer.createTransport({
    service: RecoveryNodemailerConfig.recoveryNodemailerService,
    port: RecoveryNodemailerConfig.recoveryNodemailerPort,
    auth: {
        user: RecoveryNodemailerConfig.recoveryNodemailerUserEmail,
        pass: RecoveryNodemailerConfig.recoveryNodemailerPass
    }
})

export default recoveryNodemailerTransport