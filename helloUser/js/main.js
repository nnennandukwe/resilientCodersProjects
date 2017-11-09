
// a dictionary full of mantras that will be randomly generated for the user to see and take note of

mantraDict = {
	"PEACE": "Use this mantra to remember that everything you do, are, and all things surrounding you must bring you peace in your mind, body, soul, & environment:\n"+
	"I embody peace,\n"+
	"I cultivate bliss.\n"+"Everything I am;\n"+
	"Everything I do must be a derivative of this\n"+
	"- the peace mantra",
	"MANIFESTATION": "Don\'t forget your own greatness. You don\'t need to ask for it because it\'s already within you.\n"+
	"What You Seek, You Already Found\n"+
	"What You Want, You Already Have\n"+
	"What You Need, Your Palms Have Bound\n"+
	"What Is Next, Lies Not In This Text...",
	"CLARITY": "This mantra is to help bring clarity into your thought processes and decision making.\n"+
	"Use this for releasing people and confusions and absorbing the answers within Self you need most.\n"+
	"Release ties.\n"+
	"Exchange lies.\n"+
	"And replace with third eye.\n"+
	"Choose intuition or your own demise.\n"+
	"- a clarity mantra",
	"SIMPLICITY":"Self-awareness is crucial to a simplified understanding of a complex life.\n"+
	"You are everything and you are nothing all at once.\n"+
	"A fractal of the universe.\n",
	"GODLY":"Use this mantra to understand your spiritual depth and purpose. The way in which you carry yourself may partially determine the breadth of your Ascension achievements.\n"+
	"You are the alpha & the omega.\n"+
	"Everything and everyone you encounter is a reflection of you.\n",
	"ASCENSION":"Ascension is not actually transcending upward. Ascension is shifting further inward, a fifth dimensional movement.",
	"DEATH":"Do not be afraid of something simply because you may not understand it.\n"+
	"Death is part of the life cycle. Death is particular form of birth.\n"+
	"Opposites, in this context, are one in the same.",
	"LOVE":"You cannot love anyone else if you cannot learn to love yourself."

}

// gather the user's name so the app can personalize the title.

document.getElementsByTagName("button")[0].onclick = getMantra;

function getMantra(){

	var userName = document.getElementsByTagName("input")[0].value;
	document.getElementsByTagName("h1")[0].innerHTML = "Hello, "+userName+".\nHere's your mantra for today:";

}
