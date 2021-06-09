import React,{useState} from 'react'
import pic1 from '../assets/11.png'
import pic2 from '../assets/22.png'
import pic3 from '../assets/33.png'
import pic4 from '../assets/44.png'

import '../styles/project.css'

export const Project = () => {
    const [lotus, setlotus] = useState('block');
    const [boat, setboat] = useState('none');
    const [leaves, setleaves] = useState('none');
    const [rocks, setrocks] = useState('none');

    const openLotus=()=>{
        setlotus('block');
        setboat('none');
        setleaves('none');
        setrocks('none');
    }
    const openBoat=()=>{
        setlotus('none');
        setboat('block');
        setleaves('none');
        setrocks('none');
    }
    const openLeaves=()=>{
        setlotus('none');
        setboat('none');
        setleaves('block');
        setrocks('none');
    }
    const openRocks=()=>{
        setlotus('none');
        setboat('none');
        setleaves('none');
        setrocks('block');
    }


    return (
       <>
        <br />
    
        <div className="container" >
            <div className="card" style={{ border: '1px solid #eee', borderRadius: '5px', boxShadow: '0 2px 12px 0 rgba(0,0,0,0.1)' }} >
                <div className="card-body">
                    <p className="card-title"><span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span> &nbsp;
<span style={{ fontSize: '20px' }}>3<span style={{ fontWeight: 'bold', fontSize: '25px' }}> /5</span></span></p>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row pt-4">
                                <div className="col-12">
                                    <div id="lotus" className="picture" >
                                        <img className="img-fluid" src={pic1} alt="Lotus" style={{ display: lotus }} />
                                    </div>
                                    <div id="boat" className="picture" style={{ display: boat }}>
                                        <img className="img-fluid" src={pic2} alt="Boat" />
                                    </div>
                                    <div id="leaves" className="picture" style={{ display: leaves }}>
                                        <img className="img-fluid" src={pic3} alt="Leaves" />
                                    </div>
                                    <div id="rocks" className="picture" style={{ display: rocks }}>
                                        <img className="img-fluid" src={pic4} alt="Rocks" />
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-0 pb-4 no-gutters">
                                <div className="col">
                                    <button   className="myhover" style={{border:'none',background:'none'}} onClick={openLotus}>
                                        <img className="img-fluid" src={pic1} alt="Lotus" style={{width:'100%'}} />
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="myhover" style={{border:'none',background:'none'}}  onClick={openBoat}>
                                        <img className="img-fluid" src={pic2} alt="Boat" />
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="myhover" style={{border:'none',background:'none'}} onClick={openLeaves}>
                                        <img className="img-fluid" src={pic3} alt="Leaves" />
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="myhover" style={{border:'none',background:'none'}} onClick={openRocks}>
                                        <img className="img-fluid" src={pic4} alt="Rocks" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h4 className="card-title">Campus Cauldron</h4>
                            <h6 className="card-title">Team Leader: Mahima Rai</h6>
                            <p className="card-text">Our project aims to share the precise amount of information that would be beneficial to many Bencolites throughout their Campus life!!
                            We want to bridge the gap between students who have knowledge and those who seek it. Campus Cauldron's motto is to bring BIETians together to ask, answer and seek information brewing in the same cauldron. Their regular visit on our website will be most valued.
                        </p>
                        <div className="tab_h">
                <span className="round-tab_h">Designing</span>
                <span className="round-tab_h">Web development</span>
                <span className="round-tab_h">Coding</span> 
                <span className="round-tab_h">React</span> 
                        </div>
                            <div className="btn-group m-1">
                                <a href="https://github.com/codebiet/Campus_Cauldron" target="_blank" ><button type="button" className="btn btn-warning">Github</button></a>
                            </div>
                            <div className="btn-group m-1">
                                <a href="https://drive.google.com/file/d/1LPOv4eP5MtGaQ1FZ2ZlTC_EkS_tuumoC/view?usp=drivesdk" target="_blank"><button type="button" className="btn btn-warning">Demo</button></a>
                            </div>
                            <div className="btn-group m-1">
                                <a href="https://docs.google.com/document/d/1vM0KnRmHMaHDT08pye3JM3XMtVndpZ-X4lVDCBHIS7Q/edit" target="_blank"><button type="button" className="btn btn-warning">Documentation</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        </>
    )
}
