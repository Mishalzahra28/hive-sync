import { resend } from '@/lib/email/resend';

import { appConfig } from '@/config/app';
import type { ContactValues } from '@/schema/contact';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function row(label: string, value: string | undefined | null, isFirst: boolean) {
  if (!value) return '';
  const topBorder = isFirst ? '' : 'border-top:1px solid #EEF2F7;';
  return `
    <tr>
      <td style="padding:14px 0;${topBorder}color:#64748B;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;width:160px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:14px 0;${topBorder}color:#0F172A;font-size:14px;line-height:1.6;">${escapeHtml(value)}</td>
    </tr>`;
}

export async function sendContactEmail(data: ContactValues) {
  const entries: Array<[string, string | undefined | null]> = [
    ['Full name', data.name],
    ['Email', data.email],
    ['Subject', data.subject],
    ['Message', data.message],
  ];

  const visibleEntries = entries.filter(([, v]) => Boolean(v));
  const rowsHtml = visibleEntries
    .map(([label, value], i) => row(label, value, i === 0))
    .join('');

  const html = `<!DOCTYPE html>
<html>
  <body style="margin:0;padding:32px 16px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:560px;width:100%;margin:0 auto;border-collapse:collapse;">
      <tr>
        <td style="padding:0 0 16px 0;">
          <p style="margin:0;color:#3B82F6;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.18em;">New contact message</p>
          <h1 style="margin:8px 0 0 0;color:#0F172A;font-size:22px;font-weight:700;line-height:1.3;">Message from ${escapeHtml(data.name)}</h1>
        </td>
      </tr>
      <tr>
        <td>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:separate;border:1px solid #E2E8F0;border-radius:12px;background:#FFFFFF;overflow:hidden;">
            <tr>
              <td style="padding:8px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width:100%;border-collapse:collapse;">
                  ${rowsHtml}
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 0 0 0;color:#94A3B8;font-size:12px;">
          Reply directly to this email to reach ${escapeHtml(data.name)}.
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return resend().emails.send({
    from: `${appConfig.appName} <${appConfig.emails.sender}>`,
    to: [...appConfig.adminEmails],
    replyTo: data.email,
    subject: `New Contact Message — ${data.subject} (${data.name})`,
    html,
  });
}
