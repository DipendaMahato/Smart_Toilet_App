
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
    const calculatedPH = health?.ph_level ? (health.ph_level / 2187.5).toFixed(2) : 'N/A';
    const getStatus = (value: any, normalRange: [number, number] | string, isNominal: boolean = false) => {
        if (value === 'N/A') return 'N/A';

        if (isNominal) {
             if(typeof normalRange !== 'string') return 'N/A';
             return normalRange.split(' - ').includes(value) ? 'NORMAL' : 'ABNORMAL';
        }
        
        if(typeof normalRange === 'string' || typeof value !== 'number') return 'N/A';

        return value >= normalRange[0] && value <= normalRange[1] ? 'NORMAL' : 'ABNORMAL';
    };


    return (
        <div ref={ref} style={{ width: '800px', padding: '40px', background: 'white', color: 'black', fontFamily: "'Segoe UI', Arial, sans-serif" }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #004a99', paddingBottom: '15px', marginBottom: '25px' }}>
                <img src="/logo.png" alt="logo" style={{ width: '60px', height: '60px' }}/>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ margin: 0, color: '#004a99' }}>USER HEALTH REPORT</h1>
                    <div style={{ fontSize: '13px', color: '#555', marginTop: '5px' }}>
                        Support: +91 6201158797 | Email: smarttoiletapp5@gmail.com
                    </div>
                </div>
                <div style={{ width: '60px' }}></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', border: '1px solid #eee', padding: '15px', borderRadius: '8px', marginBottom: '25px' }}>
                <div style={{ width: '50%' }}>
                    <p style={{ margin: '5px 0' }}><strong>Full Name:</strong> <span>{fullName}</span></p>
                    <p style={{ margin: '5px 0' }}><strong>Age/Gender:</strong> <span>{`${age} Yrs / ${gender}`}</span></p>
                    <p style={{ margin: '5px 0' }}><strong>Blood Group:</strong> <span>{user?.bloodGroup || 'N/A'}</span></p>
                </div>
                <div style={{ width: '50%', textAlign: 'right' }}>
                    <p style={{ margin: '5px 0' }}><strong>Contact:</strong> <span>{user?.phoneNumber || 'N/A'}</span></p>
                    <p style={{ margin: '5px 0' }}><strong>User Email:</strong> <span>{user?.email || 'N/A'}</span></p>
                    <p style={{ margin: '5px 0' }}><strong>Date:</strong> <span>{new Date().toLocaleDateString()}</span></p>
                </div>
            </div>

            <h3 style={{ textAlign: 'center', background: '#f4f4f4', padding: '8px', borderRadius: '4px', margin: '0 0 10px 0' }}>CLINICAL ANALYSIS SUMMARY</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ background: '#004a99', color: 'white' }}>
                    <tr>
                        <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>TEST PARAMETER</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>RESULT</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>REFERENCE RANGE</th>
                        <th style={{ padding: '10px', border: '1px solid #ddd' }}>STATUS</th>
                    </tr>
                </thead>
                <tbody style={{ textAlign: 'center', fontSize: '14px' }}>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Urine Volume</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{health?.urineVolume || 'N/A'} ml</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>150 - 450 ml</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: getStatus(health?.urineVolume, [150, 450]) === 'NORMAL' ? 'green' : 'red', fontWeight: 'bold' }}>{getStatus(health?.urineVolume, [150, 450])}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>pH Level</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{calculatedPH}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>5.0 - 7.5</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: getStatus(parseFloat(calculatedPH), [5.0, 7.5]) === 'NORMAL' ? 'green' : 'red', fontWeight: 'bold' }}>{getStatus(parseFloat(calculatedPH), [5.0, 7.5])}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Specific Gravity</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{health?.specificGravity || 'N/A'}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>1.005 - 1.030</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: getStatus(health?.specificGravity, [1.005, 1.030]) === 'NORMAL' ? 'green' : 'red', fontWeight: 'bold' }}>{getStatus(health?.specificGravity, [1.005, 1.030])}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Glucose/Sugar</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{health?.glucoseValue > 0 ? 'Present' : 'Absent'}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Absent</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: health?.glucoseValue > 0 ? 'red' : 'green', fontWeight: 'bold' }}>{health?.glucoseValue > 0 ? 'ABNORMAL' : 'NORMAL'}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Bristol Stool Type</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{health?.stoolStatus || 'N/A'}</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>Type 3 - Type 4</td>
                        <td style={{ padding: '10px', border: '1px solid #ddd', color: getStatus(health?.stoolStatus, 'Type 3 - Type 4', true) === 'NORMAL' ? 'green' : 'red', fontWeight: 'bold' }}>{getStatus(health?.stoolStatus, 'Type 3 - Type 4', true)}</td>
                    </tr>
                </tbody>
            </table>

            <div style={{ marginTop: '40px', borderTop: '1px solid #ddd', paddingTop: '10px', fontSize: '11px', color: '#666' }}>
                <p>Note: This report is generated by AI Smart Toilet Analytics for wellness tracking. It is not a substitute for professional medical diagnosis.</p>
                <p style={{ textAlign: 'right', fontWeight: 'bold', marginTop: '20px' }}>Authorized Electronic Signature</p>
            </div>
        </div>
    );
});

DownloadableReport.displayName = 'DownloadableReport';
