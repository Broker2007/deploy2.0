import React from 'react';
import Image from "next/image";
import cam from "@/assets/equipment/cam.jpg";
import gasparini from "@/assets/equipment/gasparini.jpg";
import laz from "@/assets/equipment/1.jpg";
import stan1 from "@/assets/equipment/stan1.jpg";
import stan2 from "@/assets/equipment/stan2.jpg";
import stan3 from "@/assets/equipment/stan3.jpg";
import phone from "@/assets/Calling.svg";
import MyForm from "@/components/ui/MyForm/MyForm";
const MyEquipment = [
    {
        title: "Камера порошковой окраски",
        description: "Камера порошковой окраски — это специализированное оборудование для нанесения порошкового покрытия на металлические изделия. Процесс окраски производится методом электростатического распыления, при котором порошок равномерно оседает на заряженную поверхность изделия, обеспечивая высокое качество покрытия и его долговечность.",
        src : cam,
    },
    {
        title: "Листогибочный пресс GASPARINI PBS 105/3000",
        description: "Листогибочный пресс Gasparini — высокотехнологичное оборудование для точного гибки металлических листов. Оснащен современной системой CNC (компьютерного числового управления), что позволяет выполнять сложные и точные операции гибки с высокой повторяемостью и минимальной погрешностью.",
        src : gasparini,
    },
    {
        title: "Лазер",
        description: "Лазерный станок — это современное устройство, предназначенное для точной резки, сверления и гравировки материалов с использованием лазерного луча высокой мощности. Станок позволяет обрабатывать различные материалы, включая металлы, пластик, стекло и дерево, обеспечивая высокую точность контуров и минимальный зазор реза.",
        src : laz,
    },
    {
        title: "PR6C 225x3100—гидравлический гибочный станок с ЧПУ",
        description: "Современный станок оснащен синхронизированным движением двух масляных цилиндров, что обеспечивается слаженной работой электрической и гидравлической систем. Это гарантирует высокую точность синхронизации, гибкости и повторного позиционирования. Дополнительно, автоматическая гидравлическая система компенсации минимизирует влияние деформации ram на заготовку, управляемая с помощью системы ЧПУ для достижения максимальной точности. Также станок включает в себя устройство компенсации деформации горла, предотвращающее изгиб детекторного элемента от напряжений фюзеляжа в процессе работы, что способствует точности гибки.",
        src : stan1,
    },
    {
        title: "Лазерный станок B-Power",
        description: "Современный станок оснащен синхронизированным движением двух масляных цилиндров, что обеспечивается слаженной работой электрической и гидравлической систем. Это гарантирует высокую точность синхронизации, гибкости и повторного позиционирования. Дополнительно, автоматическая гидравлическая система компенсации минимизирует влияние деформации ram на заготовку, управляемая с помощью системы ЧПУ для достижения максимальной точности. Также станок включает в себя устройство компенсации деформации горла, предотвращающее изгиб детекторного элемента от напряжений фюзеляжа в процессе работы, что способствует точности гибки.",
        src : stan2,
    },
    {
        title: "TECH MIG 5000 (N221)—профессиональный сварочный аппарат для интенсивной эксплуатации",
        description: "TECH MIG 5000 (N221) — универсальный источник сварочного тока, оптимизированный для промышленного использования. Он адаптирован для механизированной сварки в среде защитных газов и их смесей (MIG/MAG), сварки порошковой проволокой (FCAW) и ручной дуговой сварки (MMA).  Управление аппаратом упрощено благодаря интуитивно понятной панели управления с двумя цифровыми дисплеями, которая позволяет быстро настраивать параметры сварки. Регулировка индуктивности сварочного тока уменьшает разбрызгивание металла, а функции “2Т/4Т” и заварки кратера обеспечивают удобство работы и высокое качество шва. Дожигание проволоки предотвращает залипание в сварочной ванне, а встроенная розетка на 36В позволяет подключать подогреватель углекислого газа для защиты оборудования от переохлаждения. Встроенный режим порошковой сварки (FCAW) избавляет от необходимости использования газового баллона, создавая защитное облако газа. TECH MIG 5000 (N221) подходит для работы с различными металлами, включая черные и нержавеющие стали, медь, титан, магний и алюминий с его сплавами, делая его незаменимым устройством в любом производственном процессе.",
        src : stan3,
    },



]


const Equipment = () => {
    return (
        <main className={"adaption_home"}>
            <div className={"container mt-50"}>
                <div className={"d-f ai-end gap25 action_contact "}>
                    <div className={"byk"}>
                        Н
                    </div>
                    <div className={"w-100"}>
                        <div className={"d-f flex-wrap gap5"}>
                            <span className={"text_action d-f ai-cen"}>
                                Главная
                            </span>
                            <div className={"d-f ai-cen"}>
                                •
                            </div>
                            <span className={"text_action_active d-f ai-cen"}>
                                Обородувание
                            </span>
                        </div>
                        <span className={"spanHr"}></span>
                        <p className={"text3 mt-5"}>Наше оборудование</p>
                    </div>
                </div>
                <div className={"adaption_equipment"}>
                    {MyEquipment.map((item,i) => {
                        return (
                            <div className={`${i+1 !== MyEquipment.length && "border_bottom"} gap-10 mt-50 d-f jc-sp ai-cen pb-40 flex-wrap`}>
                                <div className={"adapt_center"}>
                                    <Image src={item.src} className={"border_rad"} width={600} height={450}/>
                                </div>
                                <div className={"max_width500"}>
                                    <p className={"text6"}>
                                        {item.title}
                                    </p>
                                    <p className={"text_company mt-20"}>
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                            // <div className={"d-f jc-sa mt-50"}>
                            //     <Image src={item.src} className={"maxWidthHeight image_block_none"} width={600} height={450}/>
                            //
                            //     <div className={"max_width500"}>
                            //         <p className={"text6 text-align-cen"}>{item.title} </p>
                            //         <p className={"mt-10 text_company"}>
                            //             {item.description}
                            //         </p>
                            //     </div>
                            //
                            // </div>
                            // <div className={"card_eq mt-50"} key={i}>
                            //     <Image src={item.src} className={"ImageEquipment"}/>
                            //     <p className={"text6"}>{item.title}</p>
                            //     <p className={"mt-10 text_company"}>
                            //         {item.description}
                            //     </p>
                            // </div>
                        )
                    })}
                </div>

            </div>
            <div className={"container mt-100 form_adaption"}>
                <div className={"d-f ai-end gap25 mb-45 action2_contact "}>
                    <div className={"byk"}>
                        В
                    </div>
                    <div className={"w-100"}>
                        <span className={"spanHr"}></span>
                        <p className={"text3 mt-5"}>ВОПРОСЫ</p>
                    </div>
                </div>
                <div className={"d-f flex-wrap jc-sp ai-s quection_contact_parent gap30"}>
                    <div className={"quection_contact"}>
                        <p className={"text6"}>ОСТАЛИСЬ ВОПРОСЫ ?</p>
                        <p className={"text_company"}>Или нужна консультация?<br/> Заполните форму или позвоните нам</p>
                        <div className={"text1_yellow mt-10 ai-cen jc-cen d-f"}><div><Image src={phone} className={"img_contact"}/> <span className={"ml-10"}>+7 (901) 181-11-12</span></div></div>
                    </div>
                    <MyForm className={"max_width380"}/>
                </div>

            </div>
        </main>
    );
};

export default Equipment;