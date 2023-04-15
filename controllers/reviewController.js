
import Review from "../models/reviewModel.js"

export const createReview = async (req, res) => {
  try {
    const body = req.body
    const feedback = new Review(body)
    feedback.save()
    res.json(feedback);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
export const getReview = async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Review.findOne({_id:id});
    
    if (!feedback) {
      return res.status(404).json({ msg: `No ${id} review found` });
    }
    res.json(feedback);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const  review  = req.body;
    const feedback = await Review.findByIdAndUpdate({_id:id} , {$set:review});
    if (!feedback) {
      return res.status(404).json({ msg: `No ${id} review found` });
    }else{
    res.json({ msg: `${id} review updated successfully` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

const data =async ()=>{
    console.log(await Review.find({}))
}

data()