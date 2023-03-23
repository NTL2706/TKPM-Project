const managerModel = require("../model/managerModel");
const pitchModel = require("../model/pitchModel");
const paginatedResults =require("../config/pagination-config");
const bcrypt = require("bcrypt");
const managerController = {
    
    getManager: async(req,res)=>{
        //dung de cast du lieu tho vao data
        // if (await managerModel.countDocuments().exec()>0)
        //     return;
        // Promise.all([
        //     managerModel.create({
        //         name:"Lam Son",
        //         email:"lamson@gmail.com",
        //         password: await bcrypt.hash("lamson123",10),
        //         pitch: await pitchModel.findById("64045959c3f222cd47991de3")
        //     })
        //     ,
        //     managerModel.create({
        //         name:"Ho Chi Minh",
        //         email:"hochiminh@gmail.com",
        //         password: await bcrypt.hash("hochiminh123",10),
        //         pitch: await pitchModel.findById("64045959c3f222cd47991de4")
        //     })
        //     ,
        //     managerModel.create({
        //         name:"Hiep Long",
        //         email:"HiepLong@gmail.com",
        //         password: await bcrypt.hash("hieplong123",10),
        //         pitch: await pitchModel.findById("64045959c3f222cd47991de8")
        //     })
        //     ,
        //     managerModel.create({
        //         name:"Phu Tho",
        //         email:"PhuTho@gmail.com",
        //         password: await bcrypt.hash("phutho123",10),
        //         pitch: await pitchModel.findById("64045959c3f222cd47991de4")
        //     })
        //     ,
        //     managerModel.create({
        //         name:"Dao Duy Anh",
        //         email:"daoduyanh@gmail.com",
        //         password: await bcrypt.hash("daoduyanh123",10),
        //         pitch: await pitchModel.findById("64045959c3f222cd47991de0")
        //     })
        // ])

        let array_pitch = [];
        let pitchs = [];

        let page = Math.max(parseInt(req.query.page) || 1, 1);
        if (req.query.page == null){
            page = 1;
        }

        console.log(req.query.page);

        let all_of_pitch = (await paginatedResults(page,managerModel)).results;
        let nextPage = "/product" + "?page=" + (await paginatedResults(page,managerModel)).next;
        let currentPage = "/product" + "?page=" + (await paginatedResults(page,managerModel)).currentPage;
        let prevousPage = "/product" + "?page=" + (await paginatedResults(page,managerModel)).previous;

        for (let i = 0; i < all_of_pitch.length; i++) {
        let temp = {};
        temp.name = all_of_pitch[i].name;
        temp.url = "product/" + all_of_pitch[i]._id;
        temp.Price = all_of_pitch[i].Price;
        temp.pitch = all_of_pitch[i].pitch;
        temp.TypeOfPitch = all_of_pitch[i].TypeOfPitch;
        temp.ImageOfPitch = all_of_pitch[i].ImageOfPitch;
        if (i % 3 === 0 && i != 0) {
            pitchs.push(array_pitch);
            array_pitch = [];
            array_pitch.push(temp);
        } else {
            array_pitch.push(temp);
        }
        }

        pitchs.push(array_pitch);
        res.render("manager/managerPitch", {
            Pitch: pitchs,
            nextLink: nextPage,
            currentLink: currentPage,
            previousLink: prevousPage,
            next:(await paginatedResults(page,managerModel)).next,
            currentPage:(await paginatedResults(page,managerModel)).currentPage,
            previous:(await paginatedResults(page,managerModel)).previous
        });
        }
    ,

}

module.exports = managerController