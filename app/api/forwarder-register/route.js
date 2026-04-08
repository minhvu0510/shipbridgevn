import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['companyName', 'contactName', 'email', 'phone', 'mainRoutes'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    // Setup Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    const sheets = google.sheets({ version: 'v4', auth });
    
    // Prepare data row
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' });
    const row = [
      timestamp,
      body.companyName,
      body.contactName,
      body.email,
      body.phone,
      body.mainRoutes,
      body.yearsExperience || '',
      body.licenseNumber || '',
      body.website || '',
      body.notes || ''
    ];
    
    // Append to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:J',
      valueInputOption: 'RAW',
      requestBody: {
        values: [row],
      },
    });
    
    return NextResponse.json({ 
      success: true,
      message: 'Đăng ký thành công! Chúng tôi sẽ liên hệ trong 1-2 ngày.'
    });
    
  } catch (error) {
    console.error('Sheet API error:', error);
    return NextResponse.json(
      { error: 'Failed to save registration. Please try again or contact admin@shipbridge.vn' },
      { status: 500 }
    );
  }
}
