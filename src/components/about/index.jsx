"use client"

import React from "react";
import ItemLayout from "./ItemLayout";


const AboutDetails = ()=>{
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
                <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col item-start"}>
                    <h2 className=" text-xl md:text-2xl text-left w-full capitalize">
                        Architect of Enchantment
                    </h2>
                    <p className="font-light text-xs sm:text-sm md:text-base">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum aspernatur excepturi fugiat. Iusto officia necessitatibus deleniti earum omnis facilis molestias distinctio, voluptatem, dolore error saepe accusantium quam nihil beatae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime ex ducimus aut consequatur excepturi eius? Porro laborum ex, ratione perferendis fugiat, est, quis saepe quia aspernatur at autem voluptates.
                    </p>
                </ItemLayout>
                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        25+ <sub className="font-semibold text-base ">Clients</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
                    <p className="font-semibold w-full text-left  text-2xl sm:text-5xl">
                        02+ <sub className="font-semibold text-base ">Years of Expereience</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
                    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs?username=codewithpawnesh&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="codeWithPawnesh" loading="lazy" />
                </ItemLayout>
                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=codewithpawnesh&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="codeWithPawnesh" loading="lazy" />
                </ItemLayout>
                <ItemLayout className={"col-span-full "}>
                    <img className="w-full h-auto" src="https://skillicons.dev/icons?i=js,typescript,jquery,html,css,bootstrap,tailwind,react,threejs,nodejs,php,c,cpp,laravel,nextjs,mongo,mysql,postgresql,aws,git,postman,github,npm,vscode" alt="codeWithPawnesh" loading="lazy" />
                </ItemLayout>
                
                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com/?user=pawnesh-itio&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="codeWithPawnesh" loading="lazy"/>
                </ItemLayout>
                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=codewithpawnesh&repo=Portfolio-01&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="codeWithPawnesh" loading="lazy" />
                </ItemLayout>
            </div>
        </section>
    );
}

export default AboutDetails