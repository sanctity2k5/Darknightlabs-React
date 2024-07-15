import searchIcon from "../../assets/search-icon.png"
import projectImageProfile from "../../assets/project-image-profile.png"
import autherProfile from "../../assets/auther-profile.png"
import trashIcon from "../../assets/trash-icon.png"
import addIcon from "../../assets/add-icon.png"
import sepratorImage from "../../assets/seprator-image.png"
import uploadIcon from "../../assets/document-upload.png"
import "./projectmanager.scss"
import Select from "../../components/select/Select"

const synergyAnglesOptions = [
    {
        label: 'Getting whitelist spots',
        value: 'Getting whitelist spots',
    },
    {
        label: 'Giving whitelists spots',
        value: 'Giving whitelists spots',
    },
    {
        label: 'Hosting AMAs',
        value: 'Hosting AMAs',
    },
    {
        label: 'Integrating branded game assets',
        value: 'Integrating branded game assets',
    },
    {
        label: 'Integrating your own branded assets',
        value: 'Integrating your own branded assets',
    },
    {
        label: 'Getting early alpha',
        value: 'Getting early alpha',
    },
    {
        label: 'Sharing early alpha',
        value: 'Sharing early alpha',
    },
]

const ProjectManager = () => {
    return (
        <>
            <div className="content_header">
                <div className="content_left">
                    <h2>Projects Manager</h2>
                    <div className="search_box">
                        <img className="search_icon" src={searchIcon} alt="Search" />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="content_right">
                    <a href="#">Darknight</a>
                    <a href="#">Labs</a>
                </div>
            </div>
            <div className="page_data">
                <div className="page_header">
                    <div className="pagination">
                        <a href="#">Project manager</a>
                        <span></span>
                        <p>Project name 111</p>
                    </div>
                    <button className="btn_gray">Save changes</button>
                </div>
                <div className="page_content">
                    <div className="project_profile">
                        <div className="project_image">
                            <img src={projectImageProfile} alt="Project" />
                        </div>
                        <div className="project_profile_btn">
                            <button className="btn-gray">
                                <img src={uploadIcon} alt="" />
                                Replace photo</button>
                            <button className="btn-red">
                                <img src={trashIcon} alt="" />Delete</button>
                        </div>
                    </div>

                    <div className="project_description_form">
                        <div className="project_author">
                            <span className="created_by">Created by</span>
                            <img className="auther_profile" src={autherProfile} alt="Author" />
                            <span className="auther_name">Joan of Arc</span>
                            <span className="auther_post_date">17/11/2023</span>
                            <span className="auther_time">16:07</span>
                        </div>
                        <form >
                            <div className="form_box">
                                <h3 className="project_title">Project details</h3>
                                <div className="form_group">
                                    <label htmlFor="projectName">Project Name</label>
                                    <input type="text" id="projectName" value="Project 1581" />
                                </div>
                                <div className="form_group">
                                    <label>Tags</label>
                                    <div className="tag_box">
                                        <span>#Gaming</span>
                                        <span>#AI</span>
                                        <span>#Metaverse</span>
                                    </div>
                                </div>
                                <div className="form_item_box">
                                    <div className="form_group">
                                        <label htmlFor="arc">Joan of Arc</label>
                                        <select name="cars" id="arc">
                                            <option value="Joan of Arc">Joan of Arc</option>
                                            <option value="Joan of Arc">Joan of Arc</option>
                                            <option value="Joan of Arc">Joan of Arc</option>
                                        </select>
                                    </div>
                                    <div className="form_group">
                                        <label htmlFor="owner">Owner</label>
                                        <select name="cars" id="owner">
                                            <option value="owner">Owner</option>
                                        </select>
                                    </div>
                                    <button className="btn_delete">
                                        <img src={trashIcon} alt="Delete" />
                                    </button>
                                </div>
                                <button className="btn_gray">
                                    Add member
                                    <img src={addIcon} alt="Add" />
                                </button>
                                <br />
                                <div className="form_group">
                                    <label htmlFor="description">Project Description</label>
                                    <textarea id="description" rows="7" cols="60">
                                        Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                                    </textarea>
                                </div>
                                <div className="seprator-image">
                                    <img src={sepratorImage} alt="Separator" />
                                </div>
                                <h3 className="project_title">Synergy</h3>
                                <div className="form_box synergy">
                                    <label htmlFor="synergy">Who has access to synergy side?</label>
                                    <select className="synergy_select" id="synergy">
                                        <option value="Allusers">All Users</option>
                                        <option value="2 users">2 Users</option>
                                    </select>
                                </div>
                                <div className="custom_select">
                                    <div className="form_box synergy_selected">
                                        <label>Synergy angles</label>
                                        {/* <div className="custom_select_field">
                                            Select synergy angel
                                        </div>
                                        <div className="custom_select_list">
                                            <ul>
                                                <li>
                                                    Getting whitelist spots
                                                    <div className="tooltip">
                                                        <img src={infoCircle} alt="" />
                                                    </div>
                                                </li>
                                                <li>
                                                    Giving whitelists spots
                                                    <div className="tooltip">
                                                        <img src={infoCircle} alt="" />
                                                    </div>
                                                </li>
                                                <li>
                                                    Hosting AMAs
                                                    <div className="tooltip">
                                                        <img src={infoCircle} alt="" />
                                                    </div>
                                                </li>
                                                <li>
                                                    Integrating branded game assets
                                                    <div className="tooltip">
                                                        <img src={infoCircle} alt="" />
                                                    </div>
                                                </li>
                                                <li>
                                                    Integrating your own branded assets
                                                    <div className="tooltip">
                                                        <img src={infoCircle} alt="" />
                                                    </div>
                                                </li>
                                                <li>
                                                    Getting early alpha
                                                    <div className="tooltip">
                                                        <img src={infoCircle} alt="" />
                                                    </div>
                                                </li>
                                                <li>
                                                    Sharing early alpha
                                                    <div className="tooltip">
                                                        <img src={infoCircle} alt="" />
                                                    </div>
                                                </li>
                                            </ul>
                                            <button className="add_new_angle_btn">
                                                Add new angle
                                                <img src={addIcon} alt="" />
                                            </button>
                                        </div> */}
                                        <Select
                                            options={synergyAnglesOptions}
                                            hasAddButton={true}
                                            addButtonLabel='Add new angle'
                                            placeholder='Select synergy angel'
                                        />
                                    </div>
                                    <button className="btn_delete">
                                        <img src={trashIcon} alt="Delete" />
                                    </button>
                                </div>
                                <button className="btn_gray">
                                    Add member
                                    <img src={addIcon} alt="Add" />
                                </button>
                                <div className="invostments-group">
                                    <div className="seprator-image">
                                        <img src={sepratorImage} alt="Separator" />
                                    </div>
                                    <h3 className="project_title">Investments</h3>
                                    <div className="toogle-switch">
                                        <h3>Open to investments</h3>
                                        <span className="switch">
                                            <input id="switch-rounded" type="checkbox" />
                                            <label htmlFor="switch-rounded"></label>
                                        </span>
                                    </div>
                                    <div className="form_box synergy">
                                        <label htmlFor="synergy">Who has access to investments side?</label>
                                        <select className="synergy_select" id="synergy">
                                            <option value="Allusers">All Users</option>
                                            <option value="2 users">2 Users</option>
                                        </select>
                                    </div>
                                    <div className="invostments-pro-wrap">
                                        <div className="form_item_box">
                                            <div className="form_group">
                                                <label htmlFor="arc">Investment properties</label>
                                                <select name="cars" id="arc">
                                                    <option value="Joan of Arc">FDV</option>
                                                    <option value="Joan of Arc">FDV</option>
                                                    <option value="Joan of Arc">FDV</option>
                                                </select>
                                            </div>
                                            <div className="form_group">
                                                <label htmlFor="owner">Investment properties</label>
                                                <select name="cars" id="owner">
                                                    <option value="owner">20mil</option>
                                                </select>
                                            </div>
                                            <button className="btn_delete">
                                                <img src={trashIcon} alt="Delete" />
                                            </button>
                                        </div>
                                        <div className="form_item_box">
                                            <div className="form_group">
                                                <label htmlFor="arc">Token price</label>
                                                <select name="cars" id="arc">
                                                    <option value="Joan of Arc">Token Price</option>
                                                    <option value="Joan of Arc">Joan of Arc</option>
                                                    <option value="Joan of Arc">Joan of Arc</option>
                                                </select>
                                            </div>
                                            <div className="form_group">
                                                <label htmlFor="owner">Price</label>
                                                <select name="cars" id="owner">
                                                    <option value="owner">0.05$</option>
                                                </select>
                                            </div>
                                            <button className="btn_delete">
                                                <img src={trashIcon} alt="Delete" />
                                            </button>
                                        </div>
                                        <button className="btn_gray">
                                            Add property
                                            <img src={addIcon} alt="Add" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="delete-project-btn">
                <button>
                    <img src={trashIcon} alt="Delete" /> Delete project
                </button>
            </div>
        </>
    )
}

export default ProjectManager