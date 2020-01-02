import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import "antd/dist/antd.css";
const data =  [
    {
        "id": "001",
        "nama": "SDN 03",
        "kesiapan": "Siap",
        "hasil": "Perikanan, LSM, Pendidikan"
    }
    ,
    {
        "id": "001",
        "nama": "SDN 03",
        "kesiapan": "Siap",
        "hasil": "Perikanan, LSM, Pendidikan"
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
            <h1 style={{textAlign:"center",fontWeight: "bolder"}}>Hasil Rekomendasi Kategori Pelayanan Publik</h1>
            <br/>
            <Table dataSource={data} columns={column} />;
        </>
    )
}