import React from 'react';
import "./styles.css";

const RecipeCardFooter = (props) => {
    return (
        <div className="recipe-card-footer">
            <div className="prep-time">
                <span className="time-icon">
                    <svg id="clock-circular-outline" xmlns="http://www.w3.org/2000/svg" width="16.308" height="16.308" viewBox="0 0 16.308 16.308">
                        <g id="Group_5" data-name="Group 5">
                            <path id="Path_2" data-name="Path 2" d="M8.154,0a8.154,8.154,0,1,0,8.154,8.154A8.163,8.163,0,0,0,8.154,0Zm0,14.526a6.372,6.372,0,1,1,6.372-6.372A6.379,6.379,0,0,1,8.154,14.526Z" fill="#a5a5a5" />
                            <path id="Path_3" data-name="Path 3" d="M258.171,143.363v-3.418a.691.691,0,1,0-1.382,0v3.638c0,.011,0,.021,0,.032a.687.687,0,0,0,.2.522l2.573,2.573a.691.691,0,0,0,.977-.977Z" transform="translate(-249.311 -135.199)" fill="#a5a5a5" />
                        </g>
                    </svg>
                </span>
                <span>
                    {props.recipe.prep_time} min
                </span>
            </div>
            <div className="num-person">
                <span className="plate-icon">
                    <svg id="dinner" xmlns="http://www.w3.org/2000/svg" width="17.588" height="17.588" viewBox="0 0 17.588 17.588">
                        <g id="Group_7" data-name="Group 7">
                            <g id="Group_6" data-name="Group 6">
                                <path id="Path_4" data-name="Path 4" d="M4.637,0a.515.515,0,0,0-.515.515V4.122H3.092V.515a.515.515,0,0,0-1.031,0V4.122H1.031V.515A.515.515,0,0,0,0,.515V5.668a1.577,1.577,0,0,0,1.546,1.58H3.607a1.577,1.577,0,0,0,1.546-1.58V.515A.515.515,0,0,0,4.637,0Z" fill="#a5a5a5" />
                            </g>
                        </g>
                        <g id="Group_9" data-name="Group 9" transform="translate(4.637 4.122)">
                            <g id="Group_8" data-name="Group 8">
                                <path id="Path_5" data-name="Path 5" d="M142.8,126.733v-4.97s0,0,0,0a4.686,4.686,0,0,0-6.252-.976v.763A2.627,2.627,0,0,1,135,123.938v2.814a4.664,4.664,0,0,0,7.942.624A1.53,1.53,0,0,1,142.8,126.733Z" transform="translate(-135 -120)" fill="#a5a5a5" />
                            </g>
                        </g>
                        <g id="Group_11" data-name="Group 11" transform="translate(4.637 12.244)">
                            <g id="Group_10" data-name="Group 10">
                                <path id="Path_6" data-name="Path 6" d="M144.344,356.59a1.528,1.528,0,0,1-.666-.157,5.719,5.719,0,0,1-8.678.428v2.686a7.747,7.747,0,0,0,9.859-1.322V356.59Z" transform="translate(-135 -356.433)" fill="#a5a5a5" />
                            </g>
                        </g>
                        <g id="Group_13" data-name="Group 13" transform="translate(6.183 1.031)">
                            <g id="Group_12" data-name="Group 12">
                                <path id="Path_7" data-name="Path 7" d="M182.611,30a7.9,7.9,0,0,0-2.611.449v2.23a5.763,5.763,0,0,1,6.39.806,7.808,7.808,0,0,1,.685-2.084A7.8,7.8,0,0,0,182.611,30Z" transform="translate(-180 -30)" fill="#a5a5a5" />
                            </g>
                        </g>
                        <g id="Group_15" data-name="Group 15" transform="translate(13.466 0)">
                            <g id="Group_14" data-name="Group 14">
                                <path id="Path_8" data-name="Path 8" d="M395.85.063a.516.516,0,0,0-.529.026A6.73,6.73,0,0,0,392,5.887v4.97a.515.515,0,0,0,.515.515h1.546v5.187a1.031,1.031,0,0,0,2.061,0V.517A.515.515,0,0,0,395.85.063Z" transform="translate(-392 -0.002)" fill="#a5a5a5" />
                            </g>
                        </g>
                        <g id="Group_17" data-name="Group 17" transform="translate(1.546 8.279)">
                            <g id="Group_16" data-name="Group 16">
                                <path id="Path_9" data-name="Path 9" d="M45,241v8.279a1.031,1.031,0,0,0,2.061,0V241Z" transform="translate(-45 -241)" fill="#a5a5a5" />
                            </g>
                        </g>
                    </svg>
                </span>
                <span>
                {props.recipe.num_person} persons
                </span>
            </div>
            <div className="star-rating">
                <span className="star-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17.223" height="16.505" viewBox="0 0 17.223 16.505">
                        <path id="star" d="M3.855,17a.917.917,0,0,1-.892-1.12L4.071,11,.313,7.7A.916.916,0,0,1,.832,6.1L5.8,5.649l1.966-4.6a.915.915,0,0,1,1.684,0l1.966,4.6L16.39,6.1a.916.916,0,0,1,.52,1.6L13.153,11l1.108,4.881a.915.915,0,0,1-1.362.989L8.612,14.3,4.324,16.868A.917.917,0,0,1,3.855,17Zm4.757-3.8a.918.918,0,0,1,.469.13l4.046,2.42-1.046-4.607a.915.915,0,0,1,.29-.892L15.92,7.14l-4.694-.426a.914.914,0,0,1-.761-.555L8.612,1.818,6.757,6.159A.912.912,0,0,1,6,6.712L1.3,7.138,4.851,10.25a.913.913,0,0,1,.29.893L4.1,15.749,8.142,13.33A.917.917,0,0,1,8.612,13.2ZM5.766,5.737h0Zm5.689,0h0Zm0,0" transform="translate(0 -0.492)" fill="#a5a5a5" />
                    </svg>
                </span>
                <span>
                    {props.recipe.stars}
                </span>
            </div>
            <div className="arrow-button">
                <span className="arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10.266" viewBox="0 0 14 10.266">
                        <g id="fast-forward" transform="translate(0 -64.013)">
                            <g id="Group_19" data-name="Group 19" transform="translate(6.066 64.013)">
                                <g id="Group_18" data-name="Group 18" transform="translate(0 0)">
                                    <path id="Path_10" data-name="Path 10" d="M215.814,68.834l-4.2-4.666a.467.467,0,0,0-.347-.155h-2.8a.466.466,0,0,0-.347.778l3.919,4.355L208.12,73.5a.467.467,0,0,0,.347.779h2.8a.473.473,0,0,0,.347-.154l4.2-4.666A.467.467,0,0,0,215.814,68.834Z" transform="translate(-208 -64.013)" fill="#fff" />
                                </g>
                            </g>
                            <g id="Group_21" data-name="Group 21" transform="translate(0 64.013)">
                                <g id="Group_20" data-name="Group 20" transform="translate(0 0)">
                                    <path id="Path_11" data-name="Path 11" d="M7.814,68.834l-4.2-4.666a.467.467,0,0,0-.347-.155H.467a.466.466,0,0,0-.347.778l3.919,4.355L.12,73.5a.467.467,0,0,0,.347.779h2.8a.473.473,0,0,0,.347-.154l4.2-4.666A.467.467,0,0,0,7.814,68.834Z" transform="translate(0 -64.013)" fill="#fff" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default RecipeCardFooter;