import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz'

export function QuizDaGaleraPage({dbExterno}){
 //   const [db,setDb]  React.useState({})
 //   React.useEffect(()=>{
 //   });

    return(
            <ThemeProvider theme={dbExterno.theme}>
            <QuizScreen
                externalQuestions={dbExterno.questions}
                externalBg={bgExterno.bg}
            />
            </ThemeProvider>
       
    );
}

export async function getServerSideProps(context){
    const [projectName, githubUser]=context.query.id.split('___');
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
            return respostaDoServer.json();
        }
        throw new Error ('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto)=> respostaConvertidaEmObjeto)
    //.catch((err)=>{
    //    console.error(err);
    //});

    //console.log('',dbExterno);
    //console.log('Infos que o Next da para nós',context.query.id);

    return {
        props:{
            dbExterno,
        }, 
    };
}
