import React from 'react'
/* Generator: Sketch 39 (31667) - http://www.bohemiancoding.com/sketch */
function LikeIcon ({ active, className }) {
  if (active) {
    return (
      <svg width="22px" height="21px" viewBox="0 0 22 21" version="1.1" className={className}>
        <title>like</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Home" transform="translate(-744.000000, -408.000000)">
            <g id="Second-Section" transform="translate(356.000000, -2.000000)">
              <g id="Rectangle-15-Copy-2" transform="translate(20.000000, 268.000000)">
                <g id="Group-5" transform="translate(-1.000000, 132.472656)">
                  <g id="Group-7" transform="translate(314.009955, 10.500000)">
                    <g id="like" transform="translate(56.000000, 1.000000)">
                      <g id="Layer_1">
                        <path d="M14.5454545,0 C12.6472727,0 10.9768182,0.970909091 10,2.44227273 C9.02318182,0.970909091 7.35272727,0 5.45454545,0 C2.44227273,0 0,2.44227273 0,5.45454545 C0,11.8181818 7.27272727,15 10,17.2727273 C12.7272727,15 20,11.8181818 20,5.45454545 C20,2.44227273 17.5577273,0 14.5454545,0 L14.5454545,0 Z" id="Shape" stroke="#FF006F" strokeWidth="2" fill="#FF006F"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
  return (
    <svg width="22px" height="21px" viewBox="0 0 22 21" version="1.1" className={className}>
      <title>Shape</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Home" transform="translate(-746.000000, -1448.000000)" strokeWidth="2" stroke="#D3D3D3">
          <g id="Second-Section" transform="translate(356.000000, -2.000000)">
            <g id="Rectangle-15-Copy-5" transform="translate(21.000000, 1042.562797)">
              <g id="Group-16" transform="translate(0.000000, 397.000000)">
                <g id="Group-5" transform="translate(1.000000, 0.472656)">
                  <g id="Group-7" transform="translate(314.009955, 10.500000)">
                    <g id="like" transform="translate(55.000000, 1.000000)">
                      <g id="Layer_1">
                        <path d="M14.5454545,0 C12.6472727,0 10.9768182,0.970909091 10,2.44227273 C9.02318182,0.970909091 7.35272727,0 5.45454545,0 C2.44227273,0 0,2.44227273 0,5.45454545 C0,11.8181818 7.27272727,15 10,17.2727273 C12.7272727,15 20,11.8181818 20,5.45454545 C20,2.44227273 17.5577273,0 14.5454545,0 L14.5454545,0 Z" id="Shape"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

LikeIcon.prototype.propTypes = {
  active: React.PropTypes.bool,
  className: React.PropTypes.string
}

export default LikeIcon
