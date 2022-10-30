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
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block'
              },
              {
                type: 'image',
                fields: [
                  {
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative text',
                    description: `Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what\'s on your page.`,
                    options: {
                      isHighlighted: true
                    }
                  }
                ]
              }
            ]
          },
          {
            title:'metadescription',
            name:'Metadec',
            type:'string'
          },
        {
            name:'createdAt',
            type:'datetime',
            title:'createdAt',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15,
                calendarTodayLabel: 'Today'
              }
        },

        {
            title: 'BlogImage',
            name: 'blogimage',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
                options: {
                  isHighlighted: true // <-- make this field easily accessible
                }
              },
              {
                // Editing this field will be hidden behind an "Edit"-button
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
              }
            ]
          },
          {
            name: 'author',
            type: 'object',
            fields: [
              {
                title: 'Author',
                name: 'author',
                type: 'reference',
                to: [{type: 'author'}]
              }
            ]
          },
    ]
}