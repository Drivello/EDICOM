let data = [
    {
    amenityId: 1,
    createdAt: "2021-06-26T18:38:53.118Z",
    finish: "2021-06-30T16:50:00.000Z",
    id: 1,
    start: "2021-06-24T16:50:00.000Z",
    status: "free",
    updatedAt: "2021-06-26T18:38:54.156Z",
    userId: null
},
{
    amenityId: 1,
    createdAt: "2021-06-26T18:38:53.118Z",
    finish: "2021-06-30T16:50:00.000Z",
    id: 2,
    start: "2021-06-24T16:50:00.000Z",
    status: "free",
    updatedAt: "2021-06-26T18:38:54.156Z",
    userId: null
},
{
    amenityId: 1,
    createdAt: "2021-06-26T18:38:53.118Z",
    finish: "2021-06-30T17:50:00.000Z",
    id: 3,
    start: "2021-06-24T17:50:00.000Z",
    status: "free",
    updatedAt: "2021-06-26T18:38:54.156Z",
    userId: null
},{
    amenityId: 1,
    createdAt: "2021-06-26T18:38:53.118Z",
    finish: "2021-06-30T17:50:00.000Z",
    id: 4,
    start: "2021-06-24T17:50:00.000Z",
    status: "free",
    updatedAt: "2021-06-26T18:38:54.156Z",
    userId: null
}
];

let result = data.filter((item,index)=>{
    return data.indexOf(item) === index;
})

console.log(result);