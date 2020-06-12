const express = require('express')
const next = require('next')
const PORT = process.env.port || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dir: ".", dev});
const handle = app.getRequestHandler();
const ffmpeg = require('fluent-ffmpeg');
const fileUpload = require('express-fileupload');

app
    .prepare()
    .then(()=>{
        const server = express()

        server.get("/", (req, res)=> {
            return handle(req, res);
        });
        server.use(fileUpload({
            useTempFiles: true,
            tempfileDir: "/tmp/"
        }))

        server.post("/mp4toavi", (req,res) => {
            console.log("i am hit"
            )
            res.contentType('video/avi')
            res.attachment('output.avi')
            req.files.mp4.mv("tmp/"+req.files.mp4.name, function(err){
                if(err) return res.sendStatus(500).send(err)
            })
            ffmpeg('tmp/' + req.files.mp4.name)
                .toFormat('.avi')
                .on('end', function(){
                    console.log("done")
                })
                .on('error', function(){
                    console.log("An error occured."+ err.message)
                })
                .pipe(res, {end: true})
        })

        server.listen(PORT, err => {
            if(err) throw err;
            console.log(`> Readyon ${PORT}`);
        });
   
    })
    .catch(ex => {
        console.log(ex.stack);
        process.exit(1);
});

ffmpeg.setFfmpegPath("/Users/sanjanatripathi/Downloads/softwares/ffmpeg.exe");

// const { MongoClient } = require("mongodb");
 
// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://crowdmotUser:crowdmot@123@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
// const client = new MongoClient(url);

// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);
