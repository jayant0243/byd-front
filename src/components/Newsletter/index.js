import React from "react";
const Newsletter = ()=>{
    return (
        <>
          <div class="news-subscription text-center">
                        <h2 class="heading-2">STAY TUNED WITH BYD</h2>
                        <p class="mb-40">Get the latest news, product updates and events updates</p>
                        <form class="news-subscription-form" id="newsletterFormId">
                            <div class="fieldset">
                                <input type="email" id="newsletterText" placeholder="Enter your email" required="required" />
                                <span class="red text-left">Please enter Email</span>
                            </div>
                            <button type="submit" name="newsletterButton" value="GET" id="newsletterButton">GET</button>
							<div id="loader"></div>
							<div id="info"></div>
                        </form>
</div>
        </>
    )
}

export default Newsletter ;