#pragma strict

function Start () {
	var direction = Random.value < 0.5 ? -1 : 1;
	var magnitude = Random.value * 300;
	rigidbody.AddForce(new Vector3(direction*magnitude, 0, 0));
}

function Update () {

}