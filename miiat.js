{\rtf1\ansi\ansicpg1252\cocoartf2757
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Archivo miIAT.js\
\
const IAT = \{\
  timeline: [\
    \{\
      type: 'html-keyboard-response',\
      stimulus: '<p>Bienvenido a tu experimento IAT b\'e1sico.</p><p>Presiona cualquier tecla para continuar.</p>'\
    \},\
    \{\
      type: 'html-keyboard-response',\
      stimulus: '<p>Fin del experimento.</p><p>Gracias por participar.</p>'\
    \}\
  ]\
\};\
\
minnoJS = function(container, url) \{\
  // Ejemplo simple: solo muestra mensajes sin l\'f3gica compleja\
  container.innerHTML = '<p>Este es un experimento b\'e1sico de MinnoJS.</p>';\
  setTimeout(() => \{\
    minnoJS.onEnd();\
  \}, 3000);\
\}\
\
minnoJS.onEnd = function() \{\};\
minnoJS.logger = function(value) \{\
  console.log('Datos registrados:', value);\
\};\
\
}