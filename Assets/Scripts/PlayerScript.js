#pragma strict

var direction : int;
var speed : float = 0.1;
var gravity : float = -0.1;
var bullet : GameObject;
var gameOver : GameObject;
var levelText : GameObject;
var level : int = 1;

function Start () {
}

function Update () {
	var key = Input.inputString;
	direction = Input.GetAxisRaw("Horizontal");
	transform.Translate(new Vector3(direction*speed, 0, 0));
	Shoot();
	if(LevelOver()) {
		Time.timeScale = 0;
		speed = 0;
		key = Input.inputString;
		if(key == "n"){
			level++;
			Application.LoadLevel("Level" + level);
			Time.timeScale = 1;
			speed = 0.1;
		}
	}
	if(key == "r"){
		level = 1;
		Application.LoadLevel("Level1");
		Time.timeScale = 1;
		speed = 0.1;
	}
}

function Shoot () {
	var shoot = Input.GetButtonUp("Fire1");
	if(shoot) {
		Instantiate(bullet, transform.position + new Vector3(0,0.5,0), Quaternion.identity);
	}
	return;
}

function OnCollisionEnter (col : Collision)
{
	if(col.collider.gameObject.layer == LayerMask.NameToLayer("Balls")){
		Time.timeScale = 0;
		speed = 0;
		Instantiate(gameOver);
	}
}

function LevelOver () {
	if(!GameObject.FindWithTag("Ball")){
		if(!GameObject.FindWithTag("LevelText")){
			Instantiate(levelText);
		}
		return true;
	}
	return false;
}