#pragma strict
var direction : int = 1;
var speed : int = 8;
var bulletLife : int = 2;
var largeBall : GameObject;
var medBall : GameObject;
var smallBall : GameObject;

function Start () {
}

function Update () {
	transform.Translate(new Vector3(0, speed * direction * Time.deltaTime, 0));
}

function OnTriggerEnter (col : Collider)
{
	if(col.gameObject.layer == LayerMask.NameToLayer("Wall") && gameObject.name == "Bullet(Clone)"){
		Destroy(gameObject);
	}
	if(col.gameObject.layer == LayerMask.NameToLayer("Balls")){
		var ballPos1 = col.gameObject.transform.position + new Vector3(0.5,0,0);
		var ballPos2 = col.gameObject.transform.position - new Vector3(0.5,0,0);
		if(col.gameObject.name == "LargeBall" || col.gameObject.name == "LargeBall(Clone)"){
			var ball1 = Instantiate(medBall, ballPos1, Quaternion.identity);
			var ball2 = Instantiate(medBall, ballPos2, Quaternion.identity);
			ball1.rigidbody.AddForce(new Vector3(125,200,0));
			ball2.rigidbody.AddForce(new Vector3(-25,200,0));
			Destroy(col.gameObject);
		} else if(col.gameObject.name == "MedBall" || col.gameObject.name == "MedBall(Clone)"){
			ball1 = Instantiate(smallBall, ballPos1, Quaternion.identity);
			ball2 = Instantiate(smallBall, ballPos2, Quaternion.identity);
			ball1.rigidbody.AddForce(new Vector3(125,200,0));
			ball2.rigidbody.AddForce(new Vector3(-25,200,0));
			Destroy(col.gameObject);
		} else if(col.gameObject.name == "SmallBall" || col.gameObject.name == "SmallBall(Clone)"){
			Destroy(col.gameObject);
		}

		if(gameObject.name == "Bullet(Clone)") {
			Destroy(gameObject);
		}
	}
}