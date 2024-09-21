"use client";

import React from "react";
import { Article } from "./Artical";
import { Title } from "./Title";

function Articles() {
  return (
    <section className="w-full my-[100px] flex items-center justify-center">
      <div className="w-full flex items-center justify-center flex-col space-y-[5rem]">
        <Title text="📜 Read Articles" rotate="-rotate-[2deg]" radius="lg" />
        <div className="space-y-4">
          <Article
            title="Unethical design of cookies windows"
            description="All the sites we visit today use trackers called cookies. There
          cookies (trackers) always track our internet footprint and collect
          data about us..."
            date="24 Sep, 2024 · 5min"
            category="Ethics"
          />
          <Article
            title="10 keywords types of IOS"
            description="lorem ipsum dolor sit amet, consectetur adip non pro id el element ull lorem"
            date="12 June, 2023 · 10min"
            category="Design"
          />
          <Article
            title="Learning Backend with Nukucode"
            description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            date="02 Jun, 2022 · 2min"
            category="Development"
          />
        </div>
      </div>
    </section>
  );
}

export { Articles };
