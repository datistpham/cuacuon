import { Fragment } from "react"
import Navigation from "../components/ComponentForAdmin/Navigation"
import Title from "../components/ComponentForAdmin/Title"
import { AiOutlineUpload } from "react-icons/ai"
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"
import axios from "axios";
import { SERVER_URL } from "../config/config";

const UploadProducts= (props)=> {
    const [file, setFile]= useState(()=> [])
    const [fileDataUrl, setFileDataUrl]= useState(()=> [])
    const [name, setName]= useState(()=> "")
    const [code, setCode]= useState(()=> "")
    const [codeColor, setCodeColor]= useState(()=> "")
    const [openAir, setOpenAir]= useState(()=> "")
    const [steelForWings, setSteelForWings]= useState(()=> "")
    const [steelForFrame, setSteelForFrame]= useState(()=> "")
    const [steelMaterial, setSteelMaterial]= useState(()=> "")
    const [surface, setSurface]= useState(()=> "")
    const [thickWings, setThickWings]= useState(()=> "")
    const [glassDoor, setGlassDoor]= useState(()=> "")
    const [width, setWidth]= useState(()=> "")
    const [height, setHeight]= useState(()=> "")
    const [lock, setLock]= useState(()=> "")
    const [hinge, setHinge]= useState(()=> "")
    const [price, setPrice]= useState(()=> "")
    const uploadCuacuon= async ()=> {
        const formData= new FormData()
        formData.append("file", file[0].imgDataUrl)
        const res= await axios({
            url: `${SERVER_URL}/api/v2/upload`,
            method: "POST",
            responseType: "json",
            headers: {
                'content-type': 'multipart/form-data'
            },
            data: formData
        })
        const result= await res.data
        const res2= await axios({
            url: `${SERVER_URL}/api/v2/info/cuacuon`,
            method: "POST",
            responseType: "json",
            data: {
                name,
                code,
                codeColor,
                openAir,
                steelForWings,
                steelForFrame,
                steelMaterial,
                surface,
                thickWings,
                glassDoor,
                width,
                height,
                lock,
                hinge,
                price,
                photo: result.secure_url
            }
        })
        const result2= await res2.data
        return console.log(result2)
    }
    const [type, setType]= useState(()=> "")
    const [color, setColor]= useState(()=> "")
    const [keyIncluded, setKeyIncluded]= useState(()=> "")
    const [material, setMaterial]= useState(()=> "")
    const [handCover, setHandCover]= useState(()=> "")
    const [lockBody, setLockBody]= useState(()=> "")
    const uploadPhukien= async ()=> {
        const formData= new FormData()
        formData.append("file", file[0].imgDataUrl)
        const res= await axios({
            url: `${SERVER_URL}/api/v2/upload`,
            method: "POST",
            responseType: "json",
            headers: {
                'content-type': 'multipart/form-data'
            },
            data: formData
        })
        const result= await res.data
        const res2= await axios({
            url: `${SERVER_URL}/api/v2/info/phukien`,
            method: "POST",
            responseType: "json",
            data: {
                name,
                type,
                color,
                keyIncluded,
                material,
                handCover,
                lock,
                lockBody,
                photo: result.secure_url
            }
        })
        const result2= await res2.data
        return console.log(result2)
    }
    const [postDoor, setPostDoor]= useState(()=> true)
    return (
        <Fragment>
            <Title />
            <Navigation />
            <div className="fsjidoajsioujeiowaa" style={{padding: 10}}>
                <div style={{margin: "16px 0", fontSize: 24}}>{postDoor=== true ? "????ng s???n ph???m c???a cu???n" : "????ng s???n ph???m ph??? ki???n"} <span onClick={()=> setPostDoor(prev=> !prev)} style={{fontSize: 16, color: "#2e89ff", cursor: "pointer"}}>?????i</span></div>
                <UploadImage file={file} fileDataUrl={fileDataUrl} setFile={setFile} setFileDataUrl={setFileDataUrl} />
                {
                    postDoor=== true &&
                    <>
                        <Input placeholder="Nh???p t??n s???n ph???m" type="text" value={name} setValue={setName} title="T??n s???n ph???m:"  />
                        <Input placeholder="Nh???p m?? s???n ph???m" type="text" value={code} setValue={setCode} title="M?? s???n ph???m:" />
                        <Input placeholder="Nh???p m?? m??u" type="text" value={codeColor} setValue={setCodeColor} title="M?? m??u:" />
                        <Input placeholder="Nh???p ?? tho??ng" type="text" value={openAir} setValue={setOpenAir} title="?? tho??ng:" />
                        <Input placeholder="Nh???p th??p l??m c??nh" type="text" value={steelForWings} setValue={setSteelForWings} title="Th??p l??m c??nh:" />
                        <Input placeholder="Nh???p th??p l??m khung" type="text" value={steelForFrame} setValue={setSteelForFrame} title="Th??p l??m khung:" />
                        <Input placeholder="Nh???p Ch???t li???u th??p" type="text" value={steelMaterial} setValue={setSteelMaterial} title="Ch???t li???u th??p:" />
                        <Input placeholder="Nh???p B??? m???t" type="text" value={surface} setValue={setSurface} title="B??? m???t:" />
                        <Input placeholder="Nh???p ????? d??y c??nh" type="text" value={thickWings} setValue={setThickWings} title="????? d??y c??nh:" />
                        <Input placeholder="Nh???p k??nh tr??n c??nh c???a" type="text" value={glassDoor} setValue={setGlassDoor} title="K??nh tr??n c??nh c???a:" />
                        <Input placeholder="Nh???p chi???u r???ng" type="text" value={width} setValue={setWidth} title="Chi???u r???ng: " />
                        <Input placeholder="Nh???p chi???u cao" type="text" value={height} setValue={setHeight} title="Chi???u cao: " />
                        <Input placeholder="Nh???p kh??a" type="text" value={lock} setValue={setLock} title="Kh??a: " />
                        <Input placeholder="Nh???p b???n l???" type="text" value={hinge} setValue={setHinge} title="B???n l???: " />
                        <Input placeholder="Nh???p gi??" type="text" value={price} setValue={setPrice} title="Gi??" />
                        <Button uploadCuacuon={uploadCuacuon} />
                    </> 
                }
                {
                    postDoor=== false &&
                    <>
                        <Input placeholder="Nh???p t??n s???n ph???m" type="text" value={name} setValue={setName} title="T??n s???n ph???m:"  />
                        <Input placeholder="Nh???p lo???i kh??a" type="text" value={type} setValue={setType} title="Lo???i kh??a:" />
                        <Input placeholder="Nh???p m??u s???c" type="text" value={color} setValue={setColor} title="M??u s???c:" />
                        <Input placeholder="Nh???p s??? ch??a ??i k??m" type="text" value={keyIncluded} setValue={setKeyIncluded} title="S??? ch??a ??i k??m:" />
                        <Input placeholder="Nh???p ch???t li???u" type="text" value={material} setValue={setMaterial} title="Ch???t li???u:" />
                        <Input placeholder="Nh???p tay ???p" type="text" value={handCover} setValue={setHandCover} title="Tay ???p:" />
                        <Input placeholder="Nh???p th??n kh??a" type="text" value={lockBody} setValue={setLockBody} title="Th??n kh??a:" />
                        <Input placeholder="Nh???p ??? kh??a" type="text" value={lock} setValue={setLock} title="??? kh??a:" />
                        <Button uploadCuacuon={uploadPhukien} />
                    </>
                }
            </div>
        </Fragment>
    )
}

const UploadImage= (props)=> {
    
    const onChangeFile= (e)=> {
        if(e.target.files?.length > 0) {
            Object.values(e.target.files).map((item, key)=> props.setFile(prev=> [...prev, {key: key, imgDataUrl: item, alt: item.name, id: item.lastModified}]))
            Object.values(e.target.files).map((item, key)=> props.setFileDataUrl(prev=> [...prev, {key: key, imgDataUrl: URL.createObjectURL(item), alt: item.name, id: item.lastModified}]))
        }
    }
    return (
        <div className="djskldjasklasqawaw" style={{width: "100%", minHeight: 350, display: "flex", justifyContent: 'center', alignItems: "center"}}>
            <div className="sjkldjsklsjaiowauwaws" style={{width: "100%", maxWidth: 600, minHeight: 350, borderRadius: 10, border: "1px solid #000", position: "relative", overflow: "hidden", display: "flex", flexWrap: "wrap", padding: 20}}>
                {
                    props.fileDataUrl?.length <= 0 && <IconUpload onChangeFile={onChangeFile} />  
                }
                {
                    props.fileDataUrl?.length > 0 && <div style={{width: 40, height: 40, display: "flex", justifyContent: 'center', alignItems: "center", position: "absolute", top: 0, right: 0, zIndex: 10, cursor: "pointer"}} data-tooltip="Close" onClick={()=> {props.setFile(()=> []);props.setFileDataUrl(()=> [])}}><AiOutlineClose /></div> 
                }
                {
                    props.fileDataUrl?.map((item, key)=> <div key={key} className='jkldjksaldsasa' style={{height: "350px", width: "100%", display: "flex", justifyContent: 'center', alignItems :'center'}}><img alt="open" src={item.imgDataUrl} style={{width: "100%", height: "100%", objectFit: "contain", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", overflow: 'hidden',}} /></div>)
                }             
            </div>            
        </div>
    )
}

const IconUpload= (props)=> {
    return (
        <div data-tooltip="Choose one or multiple images" className="fjskdjhdlkasaeaaw" style={{width: 50, height: 50, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer"}}>
            <AiOutlineUpload size={60} />
            <input onChange={props.onChangeFile} accept="image/*" type="file" style={{width: "100%", height: "100%", opacity: 0, position: "absolute", top: 0, left: 0, cursor: "pointer", borderRadius: 10, overflow: "hidden"}} title=""/>
        </div>
    ) 
}

const Input= (props)=> {
    return (
        <div className="dajskajskdassasa">
            <p style={{fontSize: 18, fontWeight: 600}}>{props.title}</p>
            <input style={{height: 50, width: 300, fontSize: 18, borderRadius: 10, border: "1px solid #000", outlineColor: "#2e89ff", padding: 5}} type={props.type} value={props.value} onChange={(e)=> props.setValue(e.target.value)} placeholder={props.placeholder} />
        </div>
    )
}

const Button= (props)=> {
    return (
        <div onClick={()=> props.uploadCuacuon()} className="kaslaskolaskasawaw" style={{padding: "10px 30px", borderRadius: 80, background: "#2e89ff", color: "#fff", fontSize: 18, display: "flex", justifyContent: "center", alignItems: "center", margin: 16, cursor: "pointer"}}>
            ????ng s???n ph???m
        </div>
    )
}

export default UploadProducts