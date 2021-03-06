import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import "antd/dist/antd.css";
const data =  [
    {
        "id": "001",
        "nama": "SDN 03",
        "kesiapan": "Siap",
        "hasil": " LSM"
    }
    ,
    {
        "id": "001",
        "nama": "SDN 03",
        "kesiapan": "Siap",
        "hasil": " LSM"
    }
];

const column = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'NAMA',
        dataIndex: 'nama',
        key: 'nama',
    },
    {
        title: 'KESIAPAN',
        dataIndex: 'kesiapan',
        key: 'kesiapan',
    },
    {
        title: 'HASIL',
        dataIndex: 'hasil',
        key: 'hasil',
    },
];

export default function Hasil(){
    return(
        <>
            <h1 style={{textAlign:"center",fontWeight: "bolder"}}>Hasil Rekomendasi Kategori Sosial Budaya</h1>
            <br/>
            <Table dataSource={data} columns={column} />;
        </>
    )
}