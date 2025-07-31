import { NextRequest, NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, insuranceType, message } = await request.json()

    console.log('Datos recibidos:', { name, email, phone, insuranceType, message })
    console.log('Variables de entorno:', {
      GMAIL_USER: process.env.GMAIL_USER,
      GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? '***configurada***' : 'NO CONFIGURADA',
      CONTACT_EMAIL: process.env.CONTACT_EMAIL
    })

    // Crear transporter con Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Contenido del email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nueva Cotización - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0f766e, #1e40af); color: white; padding: 20px; text-align: center;">
            <h1>🛡️ Nueva Cotización - Seguros Castex</h1>
          </div>
          
          <div style="padding: 20px; background: #f8fafc;">
            <h2 style="color: #1e293b;">Datos del Cliente:</h2>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #0f766e;">
              <strong>👤 Nombre:</strong> ${name}
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #1e40af;">
              <strong>📧 Email:</strong> ${email}
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #059669;">
              <strong>📱 Teléfono:</strong> ${phone}
            </div>
            
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #dc2626;">
              <strong>🛡️ Tipo de Seguro:</strong> ${insuranceType}
            </div>
            
            ${message ? `
            <div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #7c3aed;">
              <strong>💬 Mensaje:</strong><br>
              ${message}
            </div>
            ` : ''}
          </div>
          
          <div style="background: #1e293b; color: white; padding: 15px; text-align: center;">
            <p>📧 Email enviado desde el formulario web de Seguros Castex</p>
            <p style="font-size: 12px; opacity: 0.8;">Fecha: ${new Date().toLocaleString('es-CL')}</p>
          </div>
        </div>
      `,
    }

    // Enviar email
    console.log('Intentando enviar email...')
    await transporter.sendMail(mailOptions)
    console.log('Email enviado exitosamente')

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error completo sending email:', error)
    return NextResponse.json(
      { 
        error: 'Error al enviar el email',
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    )
  }
}