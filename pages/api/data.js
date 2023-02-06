import { MongoClient, ObjectId } from "mongodb";

// "mongodb+srv://auquangtuan:oxG0NhTCp2n93E7A@cluster.xlkxs96.mongodb.net/behls"
async function handler(req, res) {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017/story");
  const db = client.db("story");  

  switch (req.method) {
    case "GET": {
      const data = await db.collection("story").find().sort().toArray();
      if (!data) {
        return res.status(500).json({ message: "ERROR" });
      }
      return res.status(200).json({ message: data });
    }
    case "POST": {
      const { story } = req.body;
      const newData = {
        story,
      };
      const createData = await db.collection("story").insertOne(newData);
      console.log("createData",createData)
      return res.status(201).json({ message: "Added", data: newData });
    }
    case "PUT": {
      const { id, story } = req.body

      const updateData = await db.collection("story").updateOne({
        _id: ObjectId(id)
      },
        {
          $set: {
            story: story,
          }
        })

      return res.status(201).json({ message: "Added", data: updateData })
    }
    case "DELETE": {
      const { id } = req.body
      await db.collection("story").deleteOne({
        _id: new ObjectId(id)
      })
      return res.status(200).json({
        message: "Xóa Thành Công"
      })
    }
    default:
      break;
  }
}
// function getData() {
//   const filePath = path.join(process.cwd(), "data", "data.json");
//   const fileData = fs.readFileSync(filePath);
//   const data = JSON.parse(fileData);
//   return data;
// }
export default handler;
