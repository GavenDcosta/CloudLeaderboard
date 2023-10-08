'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Uploadpage from '@/components/Uploadpage';
import DownloadBadge from '@/components/DownloadBadge';
function Profilebadge() {
    const [Progress, setProgress] = useState(0);
    const [Username, setUsername] = useState("");
    const [PhotoDetails, setPhotoDetails] = useState({
        name: '', size: ''
    });
    const [Imgdata, setImgdata] = useState("");

    return (
        <div className='w-full relative bg-white'>

            <div className="bg-gray-100 text-blue-500 w-full m-auto text-center p-2 flex justify-center items-center">
                <div className=""><Image src="/assets/cloudLg.png" alt="me" width="40" height="40" /></div>
                <p className=''>
                    Google Cloud STUDY JAMS 23 - 24
                </p>
            </div>


            {!(Progress === 100) && <Uploadpage
                Progress={Progress}
                setProgress={setProgress}
                PhotoDetails={PhotoDetails}
                setPhotoDetails={setPhotoDetails}
                Imgdata={Imgdata}
                setImgdata={setImgdata}
                Username={Username}
                setUsername={setUsername}
            />
            }
            {
                (Progress === 100) && <DownloadBadge
                    Imgdata={Imgdata}
                    setImgdata={setImgdata}
                    setProgress={setProgress}
                    Username={Username}
                    setUsername={Username}
                />
            }


            <div className="fixed bottom-0  text-white text-center w-full">
                <div className=" bg-blue-500 text-white text-center w-full">Devloped By Arpan Das, Gaven Dcosta, Sahil Singh</div>
            </div>
        </div>
    )
}

export default Profilebadge;