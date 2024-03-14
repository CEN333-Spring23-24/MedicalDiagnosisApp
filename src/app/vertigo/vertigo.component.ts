import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vertigo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vertigo.component.html',
  styleUrl: './vertigo.component.css',
})
export class VertigoComponent {
  list: any;
  consciousness: string;
  truevertigo: string;
  illdefined: string;
  cns: string;
  duration: string;
  withmovement: string;
  hearingloss: string;
  tinnitis: string;
  otitis: string;
  adviceToShow: any;

  constructor() {
    this.list = {
      consciousness: {
      diagnosis: "Loss of Consciousness",
      treatment:[
        'Investigate for syncope, seizures, intracranial process',
        'ECG, neurodiagnostic imaging, electrolyte',
        'Consider admission',
      ]},
      elderly: {
        diagnosis: "Ill-Defined Dizziness of Elderly",
        treatment:[
        "Consider disequilibrium of aging",
        "Obtain orthostatic BP, lytes, CBC, tilt test, ECG",
        "Consider referral to cardiologist"
      ]},
      young: {
        diagnosis: "Ill-Defined Dizziness of Young",
        treatment:[
        "Obtain orthostatic BP, lytes, etc",
        "Consider psychaitric dizzness"
      ]},
      brief: {
        diagnosis: "TIAs",
        treatment:[
        "Check for carotid bruits",
        "Consider echocardiogram",
        "Consider antilatelet or anticoagulant therapy"
      ]},
      constant: {
        diagnosis: "Central Vertigo/MS",
        treatment:[
        "Consider CT, MRI, MRA",
        "Consider admission and neurology or neurosurgical referral"
      ]},
      bppv: {
        diagnosis: "Consider BPPV",
        treatment:[
        "Consider via Dix.Hallpike position test",
        "Consider modified Epley maneuver",
        "Rx: antimetics or antivertigo drugs"
      ]},
      neuronitis: {
        diagnosis: "Other conditions (e.g., Vestibular Neuronitis)",
        treatment:[
        "Rx: antihestimate/antiemetics",
        "Reassurance"
      ]},
      tinnitis: {
        diagnosis: "Consider Acoustic Neuroma",
        treatment:[
        "CT/MRI",
        "Refer to neurosurgon or ENT"
      ]},
      otitis: {
        diagnosis: "Consider Meniere Disease",
        treatment:[
        "Rx: antimhestimine/antiemetics",
        "Diet < 1 gram added salt per day",
        "ENT referral"
      ]},
      bacterial: {
        diagnosis: "Consider Bacterial Labyrinithitis",
        treatment:[
        "CT or MRI",
        "Antibiotics",
        "ENT consultation"
      ]}
    };

    this.consciousness = '';
    this.truevertigo = '';
    this.illdefined = '';
    this.cns = '';
    this.duration = '';
    this.adviceToShow = '';
    this.withmovement = '';
    this.tinnitis = '';
    this.hearingloss = '';
    this.otitis = '';
  }
  reset() {
    this.consciousness = '';
    this.truevertigo = '';
    this.illdefined = '';
    this.cns = '';
    this.duration = '';
    this.adviceToShow = '';
    this.withmovement = '';
    this.tinnitis = '';
    this.hearingloss = '';
    this.otitis = '';
  }
  reassess() {
    this.adviceToShow = {};

    if (this.consciousness == 'yes') this.adviceToShow = this.list.consciousness;

    if (
      this.consciousness == 'no' &&
      this.truevertigo == 'no' &&
      this.illdefined == 'elderly'
    )
      this.adviceToShow = this.list.elderly

    if (
      this.consciousness == 'no' &&
      this.truevertigo == 'no' &&
      this.illdefined == 'young'
    )
      this.adviceToShow = this.list.young;

    if (
      this.consciousness == 'no' &&
      this.truevertigo == 'yes' &&
      this.cns == 'yes' &&
      this.duration == 'brief'
    )
      this.adviceToShow = this.list.brief;

    if (
      this.consciousness == 'no' &&
      this.truevertigo == 'yes' &&
      this.cns == 'yes' &&
      this.duration == 'constant'
    )
      this.adviceToShow = this.list.constant;

    if (
      this.consciousness == 'no' &&
      this.truevertigo == 'yes' &&
      this.cns == 'no' &&
      this.withmovement == 'yes'
    )
      this.adviceToShow = this.list.bppv;

    if (
      this.consciousness == 'no' &&
      this.truevertigo == 'yes' &&
      this.cns == 'no' &&
      this.withmovement == 'no' &&
      this.hearingloss == 'no'
    )
      this.adviceToShow = this.list.neuronitis;

    if (
      this.consciousness == 'no' &&
      this.truevertigo == 'yes' &&
      this.cns == 'no' &&
      this.withmovement == 'no' &&
      this.hearingloss == 'yes' &&
      this.tinnitis == 'no'
    )
      this.adviceToShow = this.list.tinnitis;

    if (
      this.consciousness == 'no' &&
      this.truevertigo == 'yes' &&
      this.cns == 'no' &&
      this.withmovement == 'no' &&
      this.hearingloss == 'yes' &&
      this.tinnitis == 'yes' &&
      this.otitis == 'no'
    )
      this.adviceToShow = this.list.otitis;

    if (
      this.consciousness == 'no' &&
      this.truevertigo == 'yes' &&
      this.cns == 'no' &&
      this.withmovement == 'no' &&
      this.hearingloss == 'yes' &&
      this.tinnitis == 'yes' &&
      this.otitis == 'yes'
    )
      this.adviceToShow = this.list.bacterial;
  }
}
