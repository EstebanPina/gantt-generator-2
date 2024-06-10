'use client'
import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { RiDeleteBin2Fill } from "react-icons/ri";


export default function Home() {
  function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
  }
  const handleDelete=(index)=>{
    rows.splice(index,1)
  }  
  const columns = [
    { type: "string", label: "ID DE TAREA" },
    { type: "string", label: "Nombre de tarea" },
    { type: "string", label: "Grupo" },
    { type: "date", label: "Fecha de Inicio" },
    { type: "date", label: "Fecha de Finalizacion" },
    { type: "number", label: "Duracion" },
    { type: "number", label: "Porcentaje de avance" },
    { type: "string", label: "Dependencias" },
  ];
  const [rows, setRows] = useState([
    [
      "Ideal1",
      "Find sources",
      "Ideal",
      new Date(2015, 0, 1),
      new Date(2015, 0, 5),
      null,
      100,
      null,
    ],
    [
      "Real1",
      "Write paper",
      "Real",
      new Date(2015, 0, 3),
      new Date(2015, 0, 9),
      daysToMilliseconds(3),
      100,
      null,
    ],
  ])
  const data = [columns, ...rows];
  const options = {
    gantt: {
      palette: [
        {
          "color": "#5e97f6",
          "dark": "#2a56c6",
          "light": "#c6dafc"
        },
        {
          "color": "#db4437",
          "dark": "#a52714",
          "light": "#f4c7c3"
        },
        {
          "color": "#f2a600",
          "dark": "#ee8100",
          "light": "#fce8b2"
        },
        {
          "color": "#0f9d58",
          "dark": "#0b8043",
          "light": "#b7e1cd"
        },
        {
          "color": "#ab47bc",
          "dark": "#6a1b9a",
          "light": "#e1bee7"
        },
        {
          "color": "#00acc1",
          "dark": "#00838f",
          "light": "#b2ebf2"
        },
        {
          "color": "#ff7043",
          "dark": "#e64a19",
          "light": "#ffccbc"
        },
        {
          "color": "#9e9d24",
          "dark": "#827717",
          "light": "#f0f4c3"
        },
        {
          "color": "#5c6bc0",
          "dark": "#3949ab",
          "light": "#c5cae9"
        },
        {
          "color": "#f06292",
          "dark": "#e91e63",
          "light": "#f8bbd0"
        },
        {
          "color": "#00796b",
          "dark": "#004d40",
          "light": "#b2dfdb"
        },
        {
          "color": "#c2185b",
          "dark": "#880e4f",
          "light": "#f48fb1"
        }
      ]
    },
  };
  return(
  <main className="flex flex-col w-full items-center">
    <div className="flex flex-col h-1/2 w-full justify-center items-center">
    <h2 className="font-medium text-2xl">
    Lista de tareas
    </h2>
    <div className="flex flex-col w-full">
      {rows.map((elem,index)=>(
        <div key={index} className="flex w-full">
        <div className="text-red-600" ><RiDeleteBin2Fill onClick={()=>handleDelete(index)}/></div>
        <div className="p-2 text-sm border border-blue-400 w-1/5">{elem[0]}</div>
        <div className="p-2 text-sm border border-blue-400 w-1/5">{elem[1]}</div>
        <div className="p-2 text-sm border border-blue-400 w-1/5">{elem[2]}</div>
        <div className="p-2 text-sm border border-blue-400 w-1/5">{elem[3].getDate()+"-"+elem[3].getMonth()+1+"-"+elem[3].getFullYear()}</div>
        <div className="p-2 text-sm border border-blue-400 w-1/5">{elem[4].getDate()+"-"+elem[4].getMonth()+1+"-"+elem[4].getFullYear()}</div>
        </div>
      ))}
    </div>
    </div>
    <Chart chartType="Gantt" width="100%" height="30%" data={data} options={options} />
  </main>
  )
}