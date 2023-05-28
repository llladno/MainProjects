import React, {useEffect, useState} from 'react';
import Adminhead from "../Adminhead";


import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.defaults.color = '#ffffff';
ChartJS.defaults.font.size = 16;
const Stat = () => {
    const [stat, setStat] = useState()
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        const fn = async ()=>{
            const res = await axios.get('http://localhost:3005/getstat')
            console.log(res.data)
            setStat(res.data)
            setLoading(true)
        }
        fn()


    },[])
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Количество входа в систему на каждый день месяца',
            },
        },
    };

    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,
        16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    const  data = {
        labels,
        datasets: [
            {
                label: 'Количество',
                data: loading ? stat.map((x)=> {return x.counts})
                : '',
                borderColor: 'rgb(114,91,73)',
                titleColor: 'rgb(255,255,255)',
                backgroundColor: 'rgb(114,91,73)',
            },
        ],
    };
    return (
        <div>
            <Adminhead></Adminhead>
            <div style={{width:80+'%',marginLeft:15+'%'}}>
                { loading ? <Line options={options} data={data} />
                    : null
                }

            </div>

        </div>
    );
};

export default Stat;