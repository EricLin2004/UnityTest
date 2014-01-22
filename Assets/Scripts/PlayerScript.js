#pragma strict

var direction : int;
var speed : float = 0.1;
var gravity : float = -0.1;
var mask : LayerMask;
var bullet : GameObject;

function Start () {

}

function Update () {
	direction = Input.GetAxisRaw("Horizontal");
	transform.Translate(new Vector2(direction*speed, 0));
	Shoot();
}

function Shoot () {
	var shoot = Input.GetButtonUp("Fire1");
	if(shoot) {
		Instantiate(bullet, transform.position + new Vector2(0,0.5), Quaternion.identity);
	}
	return;
}