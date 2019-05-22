export default {
    Mutation: {
        updateData: (_, args, req) => {
            const result = { 'id':Math.random().toString(36).substr(2),'name':args.name}
            return { 'code':200, 'message':'OK',"data":result}  
        },
    },
    
};
