#pragma strict

function Start () {
	var direction = Random.value * 5;
	rigidbody2D.AddForceAtPosition(new Vector2(-5, 0), transform.position);
}

function Update () {

}