#pragma strict

function Start () {
	var direction = Random.value * 5;
	rigidbody.AddForceAtPosition(new Vector3(-5, 0, 0), transform.position);
}

function Update () {

}