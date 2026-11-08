import { ImageResponse } from 'next/og'
import { siteUrl } from '@/lib/seo'

export const alt = 'Desmond Kwame Nunoo: software engineer, designer and STEM educator in Accra, Ghana'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '80px',
                    background: '#09090b',
                    color: '#fafafa',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', fontSize: 28, color: '#a1a1aa' }}>{siteUrl.replace(/^https?:\/\//, '')}</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                        Desmond Kwame Nunoo
                    </div>
                    <div style={{ marginTop: 28, fontSize: 38, color: '#d4d4d8' }}>
                        Software engineer, designer and STEM educator
                    </div>
                    <div style={{ marginTop: 14, fontSize: 30, color: '#a1a1aa' }}>
                        Robotics · AI · IoT · 3D design and printing · Accra, Ghana
                    </div>
                </div>
            </div>
        ),
        size,
    )
}
