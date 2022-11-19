import React from "react";
import Ecommerce from "../images/ecommerce.PNG";
import EmployeeTracker from "../images/employeetracker.png";
import NoteTaker from "../images/notetaker.PNG";
import PasswordGenerator from "../images/passwordgenerator.PNG";
import TeamGenerator from "../images/teamgenerator.PNG";

function Project() {
    return(
        <>
        <section class="">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-black">My projects:</h1>

        <div class="grid grid-cols-2">
            <p> Ecommerce:
            <div class="flex">
                <img class="object-cover h-100 rounded-sm w-65" src={Ecommerce} alt=""/>
            </div>
            </p>

            <p> Employee Tracker:
            <div class="flex">
                <img class="object-cover h-100 rounded-sm w-65" src={EmployeeTracker} alt=""/>
            </div>
            </p>

            <p >Note Taker:
            <div class="flex">
                <img class="object-cover h-100 rounded-sm w-65" src={NoteTaker} alt=""/>
            </div>
            </p>

            <p>Password Generator:
            <div class="flex">
                <img class="object-cover h-100 rounded-sm w-65" src={PasswordGenerator} alt=""/>
            </div>
            </p>

            <p>Team Generator:
            <div class="flex">
                <img class="object-cover h-100 rounded-sm w-65" src={TeamGenerator} alt=""/>
            </div>
            </p>
        </div>
    </div>
</section>
</>
    );
};

export default Project;