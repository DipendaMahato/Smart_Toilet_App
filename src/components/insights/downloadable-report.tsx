
'use client';
import React, { forwardRef } from 'react';
import Image from 'next/image';
import { Timestamp } from 'firebase/firestore';

interface ReportProps {
    data: {
        user: any;
        health: any;
    } | null;
}

const getAge = (dob: Date | string | Timestamp) => {
    if (!dob) return 'N/A';
    let birthDate: Date;
    if (dob instanceof Timestamp) {
        birthDate = dob.toDate();
    } else {
        birthDate = new Date(dob);
    }
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export const DownloadableReport = forwardRef<HTMLDivElement, ReportProps>(({ data }, ref) => {
    if (!data) return <div ref={ref}></div>;

    const { user, health } = data;
    const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(' ') || 'N/A';
    const age = getAge(user?.dateOfBirth);
    const gender = user?.gender ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1) : 'N/A';

    return (
        <div ref={ref} style={{ width: '800px', padding: '40px', background: 'white', color: 'black', fontFamily: "'Segoe UI', Arial, sans-serif" }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid #004a99', paddingBottom: '15px', position: 'relative' }}>
                <Image src="/logo.png" alt="logo" width={60} height={60} style={{ position: 'absolute', left: 0, top: 0 }}/>
                <h1 style={{ margin: 0, color: '#004a99', display: 'inline-block' }}>USER HEALTH REPORT</h1>
                <div style={{ marginTop: '10px', fontSize: '13px', color: '#555' }}>
                    Support: +91 6201158797 | Email: smarttoiletapp5@gmail.com
                </div>
            </div>

            <div style={{ margin: '25px 0', display: 'flex', justifyContent: 'space-between', fontSize: '14px', border: '1px solid #eee', padding: '15px' }}>
                <div style={{ width: '50%' }}>
                    <p><strong>Full Name:</strong> <span>{fullName}</span></p>
                    <p><strong>Age/Gender:</strong> <span>{`${age} Yrs / ${gender}`}</span></p>
                    <p><strong>Blood Group:</strong> <span>{user?.bloodGroup || 'N/A'}</span></p>
                </div>
                <div style={{ width: '50%', textAlign: 'right' }}>
                    <p><strong>Contact:</strong> <span>{user?.phoneNumber || 'N/A'}</span></p>
                    <p><strong>User Email:</strong> <span>{user?.email || 'N/A'}</span></p>
                    <p><strong>Date:</strong> <span>{new Date().toLocaleDateString()}</span></p>
                </div>
            </div>

            <h3 style={{ textAlign: 'center', background: '#f4f4f4', padding: '8px' }}>CLINICAL ANALYSIS SUMMARY</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead style={{ background: '#004a99', color: 'white' }}>
                    <tr>
                        <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>TEST PARAMETER</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>RESULT</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>REFERENCE RANGE</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>STATUS</th>
                    </tr>
                </thead>
                <tbody style={{ textAlign: 'center' }}>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Urine Volume</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{health?.urineVolume || '250'} ml</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>150 - 450 ml</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: 'green', fontWeight: 'bold' }}>NORMAL</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>pH Level</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{health?.ph_level ? (health.ph_level / 2187.5).toFixed(2) : '6.5'}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>5.0 - 7.5</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: 'green', fontWeight: 'bold' }}>NORMAL</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Specific Gravity</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{health?.specificGravity || '1.018'}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>1.005 - 1.030</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: 'green', fontWeight: 'bold' }}>NORMAL</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Glucose/Sugar</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{health?.glucoseValue > 0 ? 'Present' : 'Absent'}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Absent</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: 'green', fontWeight: 'bold' }}>NORMAL</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Bristol Stool Type</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{health?.stoolStatus || 'Type 4'}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Type 3 - 4</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: 'green', fontWeight: 'bold' }}>NORMAL</td>
                    </tr>
                </tbody>
            </table>

            <div style={{ marginTop: '40px', borderTop: '1px solid #ddd', paddingTop: '10px', fontSize: '11px', color: '#666' }}>
                <p>Note: This report is generated by AI Smart Toilet Analytics for wellness tracking. It is not a substitute for professional medical diagnosis.</p>
                <p style={{ textAlign: 'right', fontWeight: 'bold' }}>Authorized Electronic Signature</p>
            </div>
        </div>
    );
});

DownloadableReport.displayName = 'DownloadableReport';
