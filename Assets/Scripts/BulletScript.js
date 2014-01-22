#pragma strict
var direction : int = 1;
var speed : int = 8;
var bulletLife : int = 2;
var balls : GameObject;

function Start () {

}

function Update () {
	if(transform.position.y < 9){
		transform.Translate(new Vector3(0, -speed * direction * Time.deltaTime, 0));
	} else if(gameObject.name == "Bullet(Clone)") {
		Destroy(gameObject, bulletLife);
	}
}

function OnTriggerEnter2D (col : Collider2D)
{
	print(col.gameObject.name);
	if(col.gameObject.name == "Balls" || "Balls(Clone)"){
		var ballPos1 = col.gameObject.transform.position + new Vector3(1,0,0);
		var ballPos2 = col.gameObject.transform.position - new Vector3(1,0,0);
		if(gameObject.name == "Bullet(Clone)") {
			Destroy(gameObject);
		}
		Instantiate(balls, ballPos1, Quaternion.identity);
		Instantiate(balls, ballPos2, Quaternion.identity);
		Destroy(col.gameObject);
	}
}