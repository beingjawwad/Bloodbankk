export type Donor={id:number,name:string,blood:string,city:string,distance:number,available:boolean,verified:boolean,lastDonation:string};
let donors:Donor[]=[
{id:1,name:"Aarav M.",blood:"O+",city:"Banjara Hills",distance:2.4,available:true,verified:true,lastDonation:"Jan 2026"},
{id:2,name:"Sara K.",blood:"A+",city:"Jubilee Hills",distance:4.1,available:true,verified:true,lastDonation:"Dec 2025"},
{id:3,name:"Rehan S.",blood:"B+",city:"Begumpet",distance:5.8,available:false,verified:true,lastDonation:"Feb 2026"},
{id:4,name:"Maya R.",blood:"AB+",city:"Secunderabad",distance:7.2,available:true,verified:false,lastDonation:"Nov 2025"},
{id:5,name:"Ishaan P.",blood:"O-",city:"Himayatnagar",distance:8.6,available:true,verified:true,lastDonation:"Oct 2025"}];
let requests:any[]=[];
export const api={
 async searchDonors(blood:string, city:string){await new Promise(r=>setTimeout(r,350));return donors.filter(d=>(!blood||d.blood===blood)&&(!city||`${d.city} ${d.name}`.toLowerCase().includes(city.toLowerCase())))},
 async createRequest(data:any){await new Promise(r=>setTimeout(r,450));const item={...data,id:`BC-${Date.now().toString().slice(-7)}`,status:"Submitted",createdAt:new Date().toISOString()};requests=[item,...requests];return item},
 async getRequests(){return requests},
 async toggleAvailability(id:number){donors=donors.map(d=>d.id===id?{...d,available:!d.available}:d);return donors.find(d=>d.id===id)}
};