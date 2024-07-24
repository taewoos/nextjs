import { connectDB } from "@/utils/db";


export default async function handler(req, res)
{
    console.log('들어옴')
    const db = (await connectDB).db('test')                         // DB접속
    let result = await db.collection('test').find().toArray()               // 다 가져옴


    // find().toArray()             // 다 찾아서 배열로
    // findOne()                // 하나만 찾기
    // insertOne()              // 하나 입력
    // deleteOne()              // 하나 삭제
    // updateOne()              // 하나 수정

    
    console.log(result);
    result = result.map(item =>({
        ...item,
        _id: item._id.toString(),
    }));
    
    res.status(200).json({data:result});
}

// npm install mongodb