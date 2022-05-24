/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import themeOn from '../../assets/images/themeOn.svg'
import themeOff from '../../assets/images/themeOff.svg'
import { Icone } from "../UI";

const claro = <Icone src={themeOn} alt='Tema claro' />
const escuro = <Icone src={themeOff} alt='Tema escuro' />

export default ({ tema }) => (tema ? escuro : claro)
