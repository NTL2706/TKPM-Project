const pitchModel = require("../model/pitchModel");
const productController = {
    getProduct : async (req, res) => {
            let array_pitch=[];
            let pitchs = [];
            let temp ={};
            let all_of_pitch = req.paginatedResults;
            
            for (let i = 0; i < all_of_pitch.length;i++){
                let temp = {};
                temp.Name = all_of_pitch[i].Name;
                temp.Price = all_of_pitch[i].Price;
                temp.TypeOfPitch = all_of_pitch[i].TypeOfPitch;
                temp.ImageOfPitch = all_of_pitch[i].ImageOfPitch;
                if (i % 3 === 0 && i != 0){
                    pitchs.push(array_pitch);
                    array_pitch = [];
                    array_pitch.push(temp);
                }
                else{
                    array_pitch.push(temp);
                }
            }
            
            pitchs.push(array_pitch);
            res.render("product/product.hbs",{
            Pitch:pitchs,
            next:req.results.next,
            currentPage:req.results.currentPage,
            previous:req.results.previous
          })
        }
        
        
}

module.exports = productController;