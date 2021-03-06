#include "Vision.h"

/**
 * The number of bits dedicated to the R colour channel
 */
uniform float bitsR;
/**
 * The number of bits dedicated to the G colour channel
 */
uniform float bitsG;
/**
 * The number of bits dedicated to the B colour channel
 */
uniform float bitsB;
/**
 * The lookup table texture
 */
uniform sampler2D lut;
/**
 * The width/height of the square lut texture
 */
uniform float lutSize;
/**
 * The colour to compare with
 */
uniform vec3 colour;
/**
 * The tolerance value
 */
uniform float tolerance;
/**
 * If false, shader will not override colours which have already been classified
 */
uniform bool overwrite;

// Assumes the LUT has been rendered to the scene first
void main() {
	// Render a single pixel
	gl_PointSize = 1.0;
	// The geometry is assumed to be the raw (e.g. YCbCr) colours of the image
	vec4 rawColour = vec4(position, 1.0);
	// Get the lut index of the colour
	float index = getLutIndex(rawColour.rgb, bitsR, bitsG, bitsB);
	// Convert the lut index into a 2D texture coordinate
	vec2 coordinate = getCoordinate(index, lutSize);

	// Check if pixel colour is close to the reference colour
	if ((overwrite || classify(lut, coordinate / lutSize) == T_UNCLASSIFIED) && distance(rawColour.xyz, colour) <= tolerance) {
		// Move the vertex to the given coordinate
		gl_Position = projectionMatrix * modelViewMatrix * vec4(coordinate, 0.0, 1.0);
	} else {
		gl_Position = vec4(0, 0, 2, 1); // put the point behind the camera to discard it
	}
}
