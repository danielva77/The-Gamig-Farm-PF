const { Review } = require("../../db")

const getAllReview = async (req, res, next) => {
      try{
        const response = await Review.findAll()
        res.status(200).send(response)  
      }catch(error){
        res.status(400).send(error)
      }
    }


 const reviewCreate = async (req, res, next) => {
      const { comment, rating, productId, userId } = req.body;
      
      try{
          
        if(!comment || !rating || !productId || !userId){
            console.log("missing parameters", 404)
        }
      
        const response = await Review.create({
          productId, userId, comment, rating
        })
        
        res.status(200).send(response) 
  
      }catch(error){
        res.status(400).send(error)
      }
    }



  const reviewDelete = async (req, res, next) => {
      
      try {
          const { reviewId } = req.params;
          if (!reviewId) console.log("Missing parameters", 404);
          const reviewFound = await Review.findByPk(reviewId);
    
          if (!reviewFound) return res.send(400).status("Review not found");
        
          const response = await reviewFound.destroy({
              where: { id: reviewId },
            });
            res.status(200).send(response) 
          } catch (error) {
            res.status(400).send(error)
          }
        };

        module.exports = {
            getAllReview,
            reviewCreate,
            reviewDelete
        }