export default {
    name:"blog",
    type:'document',
    title:'Blog',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title'
        },
        {
            name:'content',
            title:'Content',
            type:'string'
        },
        {
            name:'launch',
            type:'datetime',
            title:'Alunch At'
        }
    ]
}