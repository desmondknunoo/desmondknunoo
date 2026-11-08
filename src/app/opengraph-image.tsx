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
                    background: '#faf8f3',
                    color: '#141414',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ width: 4, height: '100%', background: '#1f4fd8' }} />
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '72px 80px 72px 76px',
                    }}
                >
                    <div style={{ display: 'flex', fontSize: 24, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#5b5853' }}>
                        {siteUrl.replace(/^https?:\/\//, '')}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: 76, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1.1 }}>
                            Desmond Kwame Nunoo
                        </div>
                        <div style={{ marginTop: 30, fontSize: 36, lineHeight: 1.35 }}>
                            Software engineer, designer and STEM educator
                        </div>
                        <div style={{ marginTop: 12, fontSize: 28, color: '#5b5853' }}>
                            Robotics · AI · IoT · 3D design and printing · Accra, Ghana
                        </div>
                    </div>
                </div>
            </div>
        ),
        size,
    )
}
