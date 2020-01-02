import React, {Fragment, useState, useEffect} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import 'bulma/css/bulma.css';

export default function Input() {

    let [userData, setUserData] = useState({});
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);
    const history = useHistory();

    function getData(e) {
        let id = e.target.id;
        let data = e.target.value;
        setUserData({...userData, [id]: data});
    }

    async function submit(e) {
        setLoading(true);
        e.preventDefault();
        try {
            const token = await Axios.post('http://localhost:5000/auth/login', userData);
            localStorage.setItem('token', token.data.token);
            window.location.replace('/')
        } catch (e) {
            setError(e.response.data.message);
        }
        setLoading(false);
    }

    return (
        <Fragment>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="field" style={{flex: 1}}>
                    <h1 style={{textAlign: "center", fontWeight: "bolder"}}>Input Data Sosial Budaya</h1>
                    <form style={{width: '40%', marginLeft: 'auto', marginRight: 'auto'}} onSubmit={(e) => submit(e)}>
                        <div className="control">
                            <label className="label">Lokasi :</label>
                            <input className="input" type="text" placeholder="Lokasi" id="Lokasi"
                                   onChange={(e) => getData(e)} required/>

                        </div>
                        <br/>
                        <h1 style={{fontWeight: "bolder",textAlign:"center"}}>Alternatif </h1>
                        <div style={{padding: 2}}>
                            <div className="control">
                                <label className="label">Alternatif :</label>
                                <input className="input" type="text" placeholder="Alternatif" id="Alternatif"
                                       onChange={(e) => getData(e)} required/>

                            </div>
                            <br/>
                            <div className="control">
                                <label className="label">Nilai :</label>
                                <input className="input" type="text" placeholder="Nilai Alternatif" id="Nilai"
                                       onChange={(e) => getData(e)} required/>
                            </div>
                        </div>
                        <br/>
                        <div className="control" style={{flex: 1}}>
                            <button className="button is-success">{loading?"Loading..":"Tambah Alternatif "}</button>
                        </div>
                        <br/>
                        <div className="control" style={{flex: 1}}>
                            <button className="button is-link" type={"submit"} style={{alignItems:"center"}}>{loading?"Loading..":"Calculate"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}