                    let indexe=0;
                    let limiteporvez=1;
                    let resultado=document.getElementById('video');
                    let botao=document.getElementById('btn');
                    let contador=0;
                    let videos=[                                 
                    "https://www.youtube.com/embed/DhSktvzjlgY",
                    "https://www.youtube.com/embed/BgjRGSTHin0",
                    "https://www.youtube.com/embed/L9eiXf8lXZc",
                    "https://www.youtube.com/embed/XjfRGoVzgSI",
                    "https://www.youtube.com/embed/-ec5K1B1rmo",
                    "https://www.youtube.com/embed/6jSpxciPwrs",
                    "https://www.youtube.com/embed/sYRjeE62RzU",
                    "https://www.youtube.com/embed/eMQNFzDqOMY",
                    "https://www.youtube.com/embed/8v8SYKFtQd8",
                    "https://www.youtube.com/embed/jxxMU_hlrCE",
                    "https://www.youtube.com/embed/mZUEZkGDsiA",
                    "https://www.youtube.com/embed/aWK2rZN0fYU",
                    "https://www.youtube.com/embed/XyhRC0P4w_M",
                    "https://www.youtube.com/embed/XkYKK1gG3Os",
                    "https://www.youtube.com/embed/Fnm8FPKL1JM",
                    "https://www.youtube.com/embed/K8gjwGRqo6E",
                    "https://www.youtube.com/embed/tO0AgDcxMns",
                    "https://www.youtube.com/embed/9S30C5ymo78",
                    "https://www.youtube.com/embed/Zx70hRZ4I3c",
                    "https://www.youtube.com/embed/b3MpHCo2x-I",
                    "https://www.youtube.com/embed/xxlSdED1i5c",
                    "https://www.youtube.com/embed/-h0fRVgwREA",
                    "https://www.youtube.com/embed/lP_1qjb9Gxo",
                    "https://www.youtube.com/embed/B-ty3JvFpeM",
                    "https://www.youtube.com/embed/dDlA6IEuflQ",
                    "https://www.youtube.com/embed/nsEZIoUABeg",
                    "https://www.youtube.com/embed/wJGQ52Rt1aU",
                    "https://www.youtube.com/embed/9jWAZ3_FCwg",
                    "https://www.youtube.com/embed/3a7k2dcV7-8",
                                                                                                "https://www.youtube.com/embed/vdKXtd_E-qw",
                                                                                                "https://www.youtube.com/embed/e0CGqCjc_jg",
                                                                                                "https://www.youtube.com/embed/XyhRC0P4w_M",
                                                                                                "https://www.youtube.com/embed/Vi2ZM_N0lUQ",
                                                                                                "https://www.youtube.com/embed/UPcTT6yFnRM",
                                                                                                "https://www.youtube.com/embed/yAmvdj-hQig",
                                                                                                "https://www.youtube.com/embed/Us4Lw5cch5w",
                                                                                                "https://www.youtube.com/embed/yI4aAdpgYaw",
                                                                                                "https://www.youtube.com/embed/Zg-PnxLbAWY",
                                                                                                "https://www.youtube.com/embed/x8u2I2W7UpQ",
                                                                                                "https://www.youtube.com/embed/60RoSdXPk24",
                                                                                                "https://www.youtube.com/embed/2ooL4RkAdwQ",
                                                                                                "https://www.youtube.com/embed/RqqgB0revGg",
                                                                                                "https://www.youtube.com/embed/bBWDnzwzqgA",
                                                                                                "https://www.youtube.com/embed/FQS6R2Df95M",
                                                                                                "https://www.youtube.com/embed/001B6ZPUf54",
                                                                                                "https://www.youtube.com/embed/Fhnke4EfPz0",
                                                                                                "https://www.youtube.com/embed/qZcbLcbss1o",
                                                                                                "https://www.youtube.com/embed/6yC3YCO6J7c",
                                                                                                "https://www.youtube.com/embed/vCMy5G2QuIM",
                                                                                                "https://www.youtube.com/embed/xuQpkSuZAf4",
                                                                                                "https://www.youtube.com/embed/f9yDc0hKKDc",
                                                                                                "https://www.youtube.com/embed/NNmXajN-dVg",
                                                                                                "https://www.youtube.com/embed/XXclw6JXsCA",
                                                                                                "https://www.youtube.com/embed/4WiLWrjN0Us",
                                                                                                "https://www.youtube.com/embed/K0tsPDivzdY",
                                                                                                "https://www.youtube.com/embed/aWK2rZN0fYU",
                                                                                                "https://www.youtube.com/embed/5M5vPoH6Iqw",
                                                                                                "https://www.youtube.com/embed/PfO6nxCB7Fg",
                                                                                                "https://www.youtube.com/embed/4TdIWrDGS7E",
                                                                                                "https://www.youtube.com/embed/5dWWKHwbZUc",
                                                                                                "https://www.youtube.com/embed/k_LpXxsJsUI",
                                                                                                "https://www.youtube.com/embed/9tCezPE2RSg",
                                                                                                "https://www.youtube.com/embed/xpC84SqP2n4",
                                                                                                "https://www.youtube.com/embed/60RoSdXPk24",
                                                                                                "https://www.youtube.com/embed/DFv-dGZX_CM",
                                                                                                "https://www.youtube.com/embed/4lMC6FWzaNM",
                                                                                                "https://www.youtube.com/embed/6yC3YCO6J7c",
                                                                                                "https://www.youtube.com/embed/DreGE-0tKXc",
                                                                                                "https://www.youtube.com/embed/AH4r21Ti9ec",
                                                                                                "https://www.youtube.com/embed/wjcTsfMcpCU",
                                                                                                "https://www.youtube.com/embed/EkHRvCebhKU",
                                                                                                "https://www.youtube.com/embed/SwhIfRfb50c",
                                                                                                "https://www.youtube.com/embed/vCMy5G2QuIM",
                                                                                                "https://www.youtube.com/embed/IOMqe9OpkRc",
                                                                                                "https://www.youtube.com/embed/_Xl-1JJ1aWg",
                                                                                                "https://www.youtube.com/embed/sgHJ4cZhbm0",
                                                                                                "https://www.youtube.com/embed/5M5vPoH6Iqw",
                                                                                                "https://www.youtube.com/embed/Kx_H_ZauDoo",
                                                                                                "https://www.youtube.com/embed/n6TaA6MxQzU",
                                                                                                "https://www.youtube.com/embed/MIf2X-13gOU",
                                                                                                "https://www.youtube.com/embed/3GJCBKG6MoY",
                                                                                                "https://www.youtube.com/embed/ZNAjeol2zY4",
                                                                                                "https://www.youtube.com/embed/pohdXbRxjKE",
                                                                                                "https://www.youtube.com/embed/rwcV5-q7VBE",
                                                                                                "https://www.youtube.com/embed/WdhnVRln86M",
                                                                                                "https://www.youtube.com/embed/oB4BXZ7_73E",
                                                                                                "https://www.youtube.com/embed/qk9HlPWp08M",
                                                                                                "https://www.youtube.com/embed/BMhUFZHyJgc",
                                                                                                "https://www.youtube.com/embed/0QnIjblk-7c",
                                                                                                "https://www.youtube.com/embed/NWZy0srS8P8",
                                                                                                "https://www.youtube.com/embed/IF5vfqYIr2o",
                                                                                                "https://www.youtube.com/embed/mOwi99hsCXA",
                                                                                                "https://www.youtube.com/embed/-khEyrurmCI",
                                                                                                "https://www.youtube.com/embed/GQy4KZE32s8",
                                                                                                "https://www.youtube.com/embed/9cCT7MdrRYc",
                                                                                                "https://www.youtube.com/embed/qpQo5E2d2CY",
                                                                                                "https://www.youtube.com/embed/jTkbKy2Yo7M",
                                                                                                "https://www.youtube.com/embed/WcTt2dpSEvo",
                                                                                                "https://www.youtube.com/embed/0XqaiI0leVw",
                                                                                                "https://www.youtube.com/embed/W4pHksTzFg8",
                                                                                                "https://www.youtube.com/embed/1_GpaSdBY2w",
                                                                                                "https://www.youtube.com/embed/EeOTSgEs21w",
                                                                                                "https://www.youtube.com/embed/2MlsPomakB0",
                                                                                                "https://www.youtube.com/embed/nU6wRBf_6mw",
                                                                                                "https://www.youtube.com/embed/R_Tz6HeZzuQ",
                                                                                                "https://www.youtube.com/embed/RB8Bdb068Ag",
                                                                                                "https://www.youtube.com/embed/rl_kanofpr0",
                                                                                                "https://www.youtube.com/embed/r8S9EW6tu4c",
                                                                                                "https://www.youtube.com/embed/5lx89TPtO_c",
                                                                                                "https://www.youtube.com/embed/_TH22dxvYVo",
                                                                                                "https://www.youtube.com/embed/Oltgd4YtGKo",
                                                                                                "https://www.youtube.com/embed/qUhmku5pRls",
                                                                                                "https://www.youtube.com/embed/xjYql8Kvp2w",
                                                                                                "https://www.youtube.com/embed/cWEYQWlpnsY",
                                                                                                "https://www.youtube.com/embed/x8u2I2W7UpQ",
                                                                                                "https://www.youtube.com/embed/lc9FCAXT4xI",
                                                                                                "https://www.youtube.com/embed/5wlQE0h9ctw",
                                                                                                "https://www.youtube.com/embed/W-e3mE-JOIc",
                                                                                                "https://www.youtube.com/embed/i4yoQM3i0ds",
                                                                                                "https://www.youtube.com/embed/72oOymfsVek",
                                                                                                "https://www.youtube.com/embed/sdMyw17xknI",
                                                                                                "https://www.youtube.com/embed/CrlHhFyX2Lk",
                                                                                                "https://www.youtube.com/embed/vd2G9anJ2ow"


              


                    ];
                    document.getElementById('btn').onclick=function(){
                        let final=indexe+limiteporvez;
                        for(;indexe<final && videos.length;indexe++){
                        contador++;
                        let iframe=document.createElement('iframe');
                        iframe.src=videos[indexe];
                        iframe.width=300;
                        iframe.height=300;
                        if(contador==2){
                            let div=document.createElement('div');
                            div.innerHTML=`
                            <a href="https://victorxx.github.io/hostinger05/" style="display:inline-block; color:white; padding:10px 20px; background-color:purple;border-radius:9px; font-size:30px;">
                            CONFERIR A OPORTUNIDADE
                            </a>
                            `;
                            resultado.appendChild(div);
                            contador=0;
                            }
                            resultado.appendChild(iframe);
                        }
                        if(indexe>=videos.length){
                            botao.disabled=true;
                            botao.textContent='Chegamos no limite já';
                        }
                    }
